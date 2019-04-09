#!/usr/bin/python
#
# A helper script to analyze population data from the WHO Mortality Database (http://www.who.int/healthinfo/mortality_data/en/)
# For usage run ./populations.py
#
# gnd, 2019
#######################################################################3

import sys
import copy
import MySQLdb
import ConfigParser

#TODO - conect to db only after checking params

config = ConfigParser.ConfigParser()
config.read("db.conf")
dbhost = config.get("mysql", "dbhost")
dbuser = config.get("mysql", "dbuser")
dbpass = config.get("mysql", "dbpass")
dbname = config.get("mysql", "dbname")
data_year = config.get("data", "data_year")
if ((not dbhost) | (not dbuser) | (not dbname)):
    sys.exit("Please provide some credentials & location of WHO data")

db = MySQLdb.connect(dbhost, dbuser, dbpass, dbname)
cur = db.cursor()

### Define some globals
data_table = "data_%s" % data_year
country_table = "countries_%s" % data_year
population_table = "population_%s" % data_year
year = "Year >= 1994"
mode = "default"
eu_names = ["AT","BE","BG","CR","CY","CZ","DN","EE","FI","FR","DE","GR","HU","IE","IR","IT","LV","LT","LU","MK","MT","MD","ME","NL","PL","PT","RO","RS","SK","SI","ES","SE","CH","UK"]
eu_codes = ["4010","4020","4030","4038","3080","4045","4050","4055","4070","4080","4085","4140","4150","4160","4170","4180","4186","4188","4190","4195","4200","4260","4207","4210","4230","4240","4270","4273","4274","4276","4280","4290","4300","4308"]
age_ranges = ["0-5","5-9","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80-84","85-89","90-94","95-oo"]


def print_no_newline(string):
    import sys
    sys.stdout.write(string)
    sys.stdout.flush()


def get_country(country_query, cc = ''):
    ### Get the country code
    if (cc == ''):
        q = "SELECT Country, name FROM %s WHERE name LIKE '%s%%';" % (country_table, country_query)
        cur.execute(q)
        if cur.rowcount == 0:
            sys.exit("Cant find country like: %s" % country_query)
        elif cur.rowcount == 1:
            res = cur.fetchone()
            country_code = str(res[0])
            country_name = str(res[1])
            print "// Found country %s with code %s" % (country_name, country_code)
        else:
            options = []
            print "Found these countries: "
            for row in cur.fetchall():
                c_code = str(row[0])
                c_name = str(row[1])
                print "Option %d: %s" %(len(options), c_name)
                options.append([c_code, c_name])
            option_in = int(raw_input("Select which option do you want: "))
            country_code = options[option_in][0]
            country_name = options[option_in][1]
            print "Choosing %s" % country_name
    else:
        q = "SELECT Country, name FROM %s WHERE Country LIKE '%s';" % (country_table, cc)
        cur.execute(q)
        if cur.rowcount == 0:
            sys.exit("Cant find country like: %s" % country_query)
        elif cur.rowcount == 1:
            res = cur.fetchone()
            country_code = str(res[0])
            country_name = str(res[1])
            print "// Found country %s with code %s" % (country_name, country_code)
    return (country_code, country_name)


# This returns an array of [year, sex, deaths]
# for a given country code and year range
#
def deaths_all_range(country_code, year_query):
    arr = []
    q = """
        SELECT year, sex, Deaths1
        FROM %s
        WHERE Cause = 'AAA'
        AND Country = %s
        AND Year %s
        ORDER BY sex, year;
        """ % (data_table, country_code, year_query)
    cur.execute(q)
    for row in cur.fetchall():
        arr.append([int(row[0]), int(row[1]), int(row[2])])
    return arr


def population(country_code, year, sex):
    q = """
        SELECT Pop1
        FROM %s
        WHERE Country = %s
        AND Year = %s
        AND Sex = %s;
        """ % (population_table, country_code, year, sex)
    cur.execute(q)
    if cur.rowcount > 0:
        return cur.fetchone()[0]
    else:
        return 0

# This returns an array of [year, sex, population]
# for a given country code and year range
#
def population_range(country_code, year_query):
    arr = []
    q = """
        SELECT year, sex, Pop1
        FROM %s
        WHERE Country = %s
        AND Year %s
        ORDER BY sex, year;
        """ % (population_table, country_code, year_query)
    cur.execute(q)
    for row in cur.fetchall():
        arr.append([int(row[0]), int(row[1]), int(row[2])])
    return arr

# This returns an array of [year, sex, population1 ... populationN]
# for a given country code and year range
#
def population_range_by_age(country_code, year_query):
    arr = []
    q = """
        SELECT year, sex,
        Pop1 as 'all',
        (Pop2 + Pop3 + Pop4 + Pop4 + Pop6) as "0",
        Pop7 as "5",
        Pop8 as "10",
        Pop9 as "15",
        Pop10 as "20",
        Pop11 as "25",
        Pop12 as "30",
        Pop13 as "35",
        Pop14 as "40",
        Pop15 as "45",
        Pop16 as "50",
        Pop17 as "55",
        Pop18 as "60",
        Pop19 as "65",
        Pop20 as "70",
        Pop21 as "75",
        Pop22 as "80",
        Pop23 as "85",
        Pop24 as "90",
        Pop25 as "95"
        FROM %s
        WHERE Country = %s
        AND Year %s
        ORDER BY sex, year;
        """ % (population_table, country_code, year_query)
    cur.execute(q)
    for i in range(cur.rowcount):
        dict = {}
        data = cur.fetchone()
        if data == None:
            return None
        desc = cur.description
        for (name, value) in zip(desc, data):
            key = str(name[0])
            dict[key] = value
        arr.append(dict)
    return arr

# this doesnt return an array but a dictionary
# using snippet from https://ianhowson.com/blog/a-quick-guide-to-using-mysql-in-python/
def get_causes_for_country_by_age(country_code, cause, year, sex):
    arr = []
    q = """
        SELECT year, cause,
        Deaths1 as 'all',
        (Deaths2 + Deaths3 + Deaths4 + Deaths4 + Deaths6) as "0",
        Deaths7 as "5",
        Deaths8 as "10",
        Deaths9 as "15",
        Deaths10 as "20",
        Deaths11 as "25",
        Deaths12 as "30",
        Deaths13 as "35",
        Deaths14 as "40",
        Deaths15 as "45",
        Deaths16 as "50",
        Deaths17 as "55",
        Deaths18 as "60",
        Deaths19 as "65",
        Deaths20 as "70",
        Deaths21 as "75",
        Deaths22 as "80",
        Deaths23 as "85",
        Deaths24 as "90",
        Deaths25 as "95"
        FROM %s
        WHERE country = %s
        AND cause %s
        AND year %s
        AND sex = %d
        ORDER BY year, cause;
        """ % (data_table, country_code, cause, year, sex)
    cur.execute(q)
    for i in range(cur.rowcount):
        dict = {}
        data = cur.fetchone()
        if data == None:
            return None
        desc = cur.description
        for (name, value) in zip(desc, data):
            key = str(name[0])
            dict[key] = value
        arr.append(dict)
    return arr


# This gets all deaths, population, and deaths related to cause range
# for a given country, cause range and year range divided byy age
#
def get_deaths_by_age(country_code, cause_range, year_range, format = 'normal'):
    m_cause = {}
    f_cause = {}
    d_a = []
    p_a = {}
    m_all = {}
    f_all = {}
    m_pop = {}
    f_pop = {}
    m_die = {}
    f_die = {}
    cause = "BETWEEN '%s' and '%s'" % (cause_range[0], cause_range[1])
    if (year_range[0] == year_range[1]):
        year_query = "= %s" % year_range[0]
    else:
        year_query = "BETWEEN %d AND %d" % (year_range[0], year_range[1])
    # Retrieve total males and females that died of cause
    m_cause = get_causes_for_country_by_age(country_code, cause, year_query, 1)
    f_cause = get_causes_for_country_by_age(country_code, cause, year_query, 2)
    # Retrieve total males and females that died
    d_a = deaths_all_range(country_code, year_query)
    p_a = population_range_by_age(country_code, year_query)
    for year in range(year_range[0], year_range[1]+1):
        # All male and female population for a given year divided by age group
        m_pop_tmp = {}
        f_pop_tmp = {}
        for entry in p_a:
            if (entry['year'] == year):
                if (entry['sex'] == 1):
                    for age_range in age_ranges:
                        key = age_range.split('-')[0]
                        if (key in m_pop_tmp):
                            m_pop_tmp[key] += entry[key]
                        else:
                            m_pop_tmp[key] = entry[key]
                    if ('all' in m_pop_tmp):
                        m_pop_tmp['all'] += entry['all']
                    else:
                        m_pop_tmp['all'] = entry['all']
                if (entry['sex'] == 2):
                    for age_range in age_ranges:
                        key = age_range.split('-')[0]
                        if (key in f_pop_tmp):
                            f_pop_tmp[key] += entry[key]
                        else:
                            f_pop_tmp[key] = entry[key]
                    if ('all' in f_pop_tmp):
                        f_pop_tmp['all'] += entry['all']
                    else:
                        f_pop_tmp['all'] = entry['all']
        m_pop[year] = m_pop_tmp
        f_pop[year] = f_pop_tmp
        # All male and female deaths for a given year
        mda = 0
        fda = 0
        for entry in d_a:
            if (entry[0] == year):
                if (entry[1] == 1):
                    mda = entry[2]
                if (entry[1] == 2):
                    fda = entry[2]
        f_all[year] = fda
        m_all[year] = mda
        # if we lack data zero everything else
        if ((mda == 0) | (fda == 0) | (m_pop[year] == {}) | (f_pop[year] == {})):
            m_pop[year] = 0
            f_pop[year] = 0
            m_all[year] = 0
            f_all[year] = 0
            m_die[year] = 0
            f_die[year] = 0
            if format == 'normal':
                print_no_newline("n/a, ")
        # Now do some maths
        else:
            if format == 'normal':
                print_no_newline("%d " % year)
            # males
            deaths = {}
            for entry in m_cause:
                if (entry['year'] == year):
                    for age_range in age_ranges:
                        key = age_range.split('-')[0]
                        if (key in deaths):
                            deaths[key] += entry[key]
                        else:
                            deaths[key] = entry[key]
                    if ('all' in deaths):
                        deaths['all'] += entry['all']
                    else:
                        deaths['all'] = entry['all']
            m_die[year] = deaths
            # females
            deaths = {}
            for entry in f_cause:
                if (entry['year'] == year):
                    for age_range in age_ranges:
                        key = age_range.split('-')[0]
                        if (key in deaths):
                            deaths[key] += entry[key]
                        else:
                            deaths[key] = entry[key]
                    if ('all' in deaths):
                        deaths['all'] += entry['all']
                    else:
                        deaths['all'] = entry['all']
            f_die[year] = deaths
    print ""
    return(m_all, f_all, m_pop, f_pop, m_die, f_die)


def show_population(country_query, year):
    m_pop = []
    f_pop = []
    # Get the country code (cc) and country name cn from user
    # Also get the international country code (icc)
    if ('cc-' in country_query):
        in_cc = country_query.split('-')[1]
        (cc, cn) = get_country(country_query, in_cc)
    else:
        (cc, cn) = get_country(country_query)
    icc = eu_names[eu_codes.index(cc)].lower()
    m_pop = population(cc, year, 1)
    f_pop = population(cc, year, 2)
    print "Population in %s in the year %d" % (cn, year)
    print "All Male Female"
    print "%d %d %d" % (m_pop+f_pop, m_pop, f_pop)


def show_population_by_age(country_query, year):
    m_pop = {}
    f_pop = {}
    # Get the country code (cc) and country name cn from user
    # Also get the international country code (icc)
    if ('cc-' in country_query):
        in_cc = country_query.split('-')[1]
        (cc, cn) = get_country(country_query, in_cc)
    else:
        (cc, cn) = get_country(country_query)
    icc = eu_names[eu_codes.index(cc)].lower()
    year_query = "= %s" % year

    pop = population_range_by_age(cc, year_query)
    for entry in pop:
        if entry['sex'] == 1:
            m_pop = entry
        if entry['sex'] == 2:
            f_pop = entry

    print "Population in %s in the year %d" % (cn, year)
    print "Age All Male Female"
    for age_range in age_ranges:
        age = age_range.split('-')[0]
        print "%s %d %d %d" % (age_range, m_pop[age]+f_pop[age], m_pop[age], f_pop[age])



def show_deaths_by_age(cause_range, cause_name, country_query, year):
    m_pop = {}
    f_pop = {}
    # Get the country code (cc) and country name cn from user
    # Also get the international country code (icc)
    if ('cc-' in country_query):
        in_cc = country_query.split('-')[1]
        (cc, cn) = get_country(country_query, in_cc)
    else:
        (cc, cn) = get_country(country_query)
    icc = eu_names[eu_codes.index(cc)].lower()
    year_query = "= %s" % year
    cause_start = cause_range[0]
    cause_end = cause_range[1]
    (m_a,f_a,m_p,f_p,m_d,f_d) = get_deaths_by_age(cc, [cause_start, cause_end], [year, year])
    print "Deaths in %s in the year %d caused by %s" % (cn, year, cause_name)
    print "Age All Male Female"
    for age_range in age_ranges:
        age = age_range.split('-')[0]
        print "%s %d %d %d" % (age_range, m_d[year][age]+f_d[year][age], m_d[year][age], f_d[year][age])


#############################   MAIN
#############################

### Get some task or exit
if (len(sys.argv) > 1):
    task = sys.argv[1]
else:
    sys.exit("Usage: ./populations.py [ population | population_by_age | deaths_by_age ]")


# This prints the population (male and female) for a given country and year
if (task == "population"):
    if (len(sys.argv) > 3):
        country_query = sys.argv[2]
        year = int(sys.argv[3])
        show_population(country_query, year)
    else:
        sys.exit("Usage: ./populations.py population <country_name> <year>")


# This prints the population divided by age groups (male and female) for a given country and year
elif (task == "population_by_age"):
    if (len(sys.argv) > 3):
        country_query = sys.argv[2]
        year = int(sys.argv[3])
        show_population_by_age(country_query, year)
    else:
        sys.exit("Usage: ./populations.py population_by_age <country_name> <year>")


# This prints the population divided by age groups (male and female) for a given country and year
elif (task == "deaths_by_age"):
    if (len(sys.argv) > 4):
        country_query = sys.argv[2]
        cause = sys.argv[3]
        year = int(sys.argv[4])
        if (cause == 'cancer'):
            show_deaths_by_age(['c00','d48'], 'cancer', country_query, year)
        else:
            # just cancer for now
            sys.exit("Usage: ./populations.py deaths_by_age <country_name> < cancer > <year>")
    else:
        sys.exit("Usage: ./populations.py deaths_by_age <country_name> < cancer > <year>")

else:
    sys.exit("Usage: ./populations.py [ population | population_by_age | deaths_by_age ]")
