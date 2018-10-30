#!/usr/bin/python
#
# A script to analyze data from the WHO Mortality Database (http://www.who.int/healthinfo/mortality_data/en/)
# Currently focused mostly on cancer and suicide related deaths.
# For usage run ./deaths.py
#
# gnd, 2016 - 2018
#######################################################################3

import sys
import MySQLdb
import ConfigParser

config = ConfigParser.ConfigParser()
config.read("db.conf")
dbhost = config.get("mysql", "dbhost")
dbuser = config.get("mysql", "dbuser")
dbpass = config.get("mysql", "dbpass")
dbname = config.get("mysql", "dbname")
if ((not dbhost) | (not dbuser) | (not dbname)):
    sys.exit("Please provide some credentials & location of WHO data")

db = MySQLdb.connect(dbhost, dbuser, dbpass, dbname)
cur = db.cursor()

### Define some globals
data_table = "data_2018"
country_table = "countries_2018"
population_table = "population_2018"
year = "Year >= 1994"
mode = "default"
eu_names = ["AT","BE","BG","CR","CY","CZ","DN","EE","FI","FR","DE","GR","HU","IE","IR","IT","LV","LT","LU","MK","MT","MD","ME","NL","PL","PT","RO","RS","SK","SI","ES","SE","CH","UK"]
eu_codes = ["4010","4020","4030","4038","3080","4045","4050","4055","4070","4080","4085","4140","4150","4160","4170","4180","4186","4188","4190","4195","4200","4260","4207","4210","4230","4240","4270","4273","4274","4276","4280","4290","4300","4308"]


def print_no_newline(string):
    import sys
    sys.stdout.write(string)
    sys.stdout.flush()

def get_country(country_query):
    ### Get the country code
    q = "SELECT Country, name FROM %s WHERE name LIKE '%s%%';" % (country_table, country_query)
    cur.execute(q)
    if cur.rowcount == 0:
        sys.exit("Cant find country like: %s" % country_query)
    elif cur.rowcount == 1:
        res = cur.fetchone()
        country_code = str(res[0])
        country_name = str(res[1])
        print "Found country %s with code %s" % (country_name, country_code)
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
    return (country_code, country_name)


def deaths_all(country_code, year, sex):
    q = """
        SELECT Deaths1
        FROM %s
        WHERE Cause = 'AAA'
        AND Country = %s
        AND Year = %s
        AND Sex = %s;
        """ % (data_table, country_code, year, sex)
    cur.execute(q)
    if cur.rowcount > 0:
        return cur.fetchone()[0]
    else:
        return 0

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


def get_causes_for_country(country_code, cause, year, sex):
    arr = []
    q = """
        SELECT year, cause, deaths1
        FROM %s
        WHERE country = %s
        AND cause %s
        AND year %s
        AND sex = %d
        ORDER BY year, cause;
        """ % (data_table, country_code, cause, year, sex)
    cur.execute(q)
    for row in cur.fetchall():
        arr.append([int(row[0]), row[1], int(row[2])])
    return arr

# This generates an array with cause names
# Input is a cause_range - an array:
#   - cause_range[0] = start of the cause range (eg. C00)
#   - cause_range[1] = end of the cause range (eg. D99)
def generate_causes(cause_range):
    start = cause_range[0]
    end = cause_range[1]
    start_letter = start[0]
    end_letter = end[0]
    cause_arr = []
    final = False
    end_num = 99
    for char in range(ord(start_letter.lower()), ord(end_letter.lower())+1):
        if (char == ord(end_letter.lower())):
            final = True
            end_num = int(end[1:])
        for num in range(0,end_num+1):
            cause = "%s%02d" % (chr(char).upper(), num)
            cause_arr.append(cause)
    return cause_arr


#
# This gets all the cases in a given year for a given cause_range
#
def get_causes(cause_range, country_code, country_name, year, short):
    m_all = {}
    f_all = {}
    m_cause = []
    m_cause_assoc = {}
    f_cause = []
    f_cause_assoc = {}
    m_pop = {}
    f_pop = {}
    cause = "BETWEEN '%s' and '%s'" % (cause_range[0], cause_range[1])
    year_query = "= %s" % year
    m_cause = get_causes_for_country(country_code, cause, year_query, 1)
    f_cause = get_causes_for_country(country_code, cause, year_query, 2)
    mda = deaths_all(country_code, year, 1)
    fda = deaths_all(country_code, year, 2)
    m_all[year] = mda
    f_all[year] = fda
    m_pop[year] = population(country_code, year, 1)
    f_pop[year] = population(country_code, year, 2)
    if ((mda == 0) | (fda == 0)):
        print "Processing data for %d .. no data" % year
        m_cause_assoc[year] = 0
        f_cause_assoc[year] = 0
    else:
        print "Processing data for %d" % year
        m_cause_assoc[year] = []
        f_cause_assoc[year] = []
        causes = generate_causes(cause_range)
        for cause_code in causes:
            if (short):
                for i in range(len(m_cause)):
                    if ((int(m_cause[i][0]) == year) & (m_cause[i][1][0:3] == cause_code)):
                        entry_found = False
                        for entry in m_cause_assoc[year]:
                            if entry['cc'] == cause_code:
                                entry['num'] += int(m_cause[i][2])
                                entry['pop'] += round((float(m_cause[i][2]) / (m_pop[year]+f_pop[year])) * 100,6)
                                entry_found = True
                        if (not entry_found):
                            m_cause_assoc[year].append({'cc': cause_code, 'num': int(m_cause[i][2]), 'pop': round((float(m_cause[i][2]) / (m_pop[year]+f_pop[year])) * 100,6)})
                for i in range(len(f_cause)):
                    if ((int(f_cause[i][0]) == year) & (f_cause[i][1][0:3] == cause_code)):
                        entry_found = False
                        for entry in f_cause_assoc[year]:
                            if entry['cc'] == cause_code:
                                entry['num'] += int(f_cause[i][2])
                                entry['pop'] += round((float(f_cause[i][2]) / (m_pop[year]+f_pop[year])) * 100,6)
                                entry_found = True
                        if (not entry_found):
                            f_cause_assoc[year].append({'cc': cause_code, 'num': int(f_cause[i][2]), 'pop': round((float(f_cause[i][2]) / (m_pop[year]+f_pop[year])) * 100,6)})
            else:
                for i in range(len(m_cause)):
                    if ((int(m_cause[i][0]) == year) & (m_cause[i][1][0:3] == cause_code)):
                        m_cause_assoc[year].append({'cc': m_cause[i][1], 'num': int(m_cause[i][2]), 'pop': round((float(m_cause[i][2]) / (m_pop[year]+f_pop[year])) * 100,6)})
                for i in range(len(f_cause)):
                    if ((int(f_cause[i][0]) == year) & (f_cause[i][1][0:3] == cause_code)):
                        f_cause_assoc[year].append({'cc': f_cause[i][1], 'num': int(f_cause[i][2]), 'pop': round((float(f_cause[i][2]) / (m_pop[year]+f_pop[year])) * 100,6)})

        # sort the arrays
        m_cause_assoc[year] = sorted(m_cause_assoc[year], key=lambda dct: dct['pop'], reverse=True)
        f_cause_assoc[year] = sorted(f_cause_assoc[year], key=lambda dct: dct['pop'], reverse=True)
    return (m_cause_assoc, f_cause_assoc)


# This prints the top10 unabbreviated causes for a given year and cause range
# The data is in percentage of country's total population
def top10_causes(country_query, cause_range, year, short_arg):
    (cc, cn) = get_country(country_query)
    if (short_arg == 'short'):
        short = True
    else:
        short = False
    (m_cause_assoc, f_cause_assoc) = get_causes([cause_range[0],cause_range[1]], cc, cn, year, short)
    print "Top 10 causes between (%s-%s) in %s for males in %s (unabbreviated):" % (cause_range[0], cause_range[1], year, cn)
    print "Rank\tCause\tDeaths\t% of Population"
    cause_rank = 1
    for entry in m_cause_assoc[year][0:10]:
        print "%d:\t%s\t%d\t%f" % (cause_rank, entry['cc'], entry['num'], entry['pop'])
        cause_rank += 1
    print "Top 10 causes between (%s-%s) in %s for females in %s (unabbreviated):" % (cause_range[0], cause_range[1], year, cn)
    print "Rank\tCause\tDeaths\t% of Population"
    cause_rank = 1
    for entry in f_cause_assoc[year][0:10]:
        print "%d:\t%s\t%d\t%f" % (cause_rank, entry['cc'], entry['num'], entry['pop'])
        cause_rank += 1

# This prints the top10 causes for a given year
# The data is in percentage of country's total population
# The short (abbreviated) causes used elsewhere are eg. C34 (malignant neoplasm of bronhchus and lungs)
# The long (detailed) causes used in many EU countries after 2010 are like eg. C341 (malignant neoplasm of upper lobe, bronchus or lung)
# In the long variant the top10 looks differently, as simillar causes compete for a place in the list
def cancer_top10_causes(country_query, year, short_arg):
    (cc, cn) = get_country(country_query)
    cause_start = 'c00'
    cause_end = 'd48'
    if (short_arg == 'short'):
        short = True
    else:
        short = False
    (m_cause_assoc, f_cause_assoc) = get_causes([cause_start,cause_end], cc, cn, year, short)
    print "Top 10 causes of cancer-caused death in %s for males in %s:" % (year, cn)
    print "Rank\tCause\tDeaths\t% of Population"
    cause_rank = 1
    for entry in m_cause_assoc[year][0:10]:
        print "%d:\t%s\t%d\t%f" % (cause_rank, entry['cc'], entry['num'], entry['pop'])
        cause_rank += 1
    print "Top 10 causes of cancer-caused death in %s for females in %s:" % (year, cn)
    print "Rank\tCause\tDeaths\t% of Population"
    cause_rank = 1
    for entry in f_cause_assoc[year][0:10]:
        print "%d:\t%s\t%d\t%f" % (cause_rank, entry['cc'], entry['num'], entry['pop'])
        cause_rank += 1


# This prints all the top10 causes of cancer over all years in a given country
# The data is in percentage of country's total population
#
def cancer_top10_full(country_query, year_start, year_end):
    m_cause_assoc = {}
    f_cause_assoc = {}
    (cc, cn) = get_country(country_query)
    cause_start = 'c00'
    cause_end = 'd48'
    for year in range(year_start, year_end):
        (m, f) = get_causes([cause_start,cause_end], cc, cn, year, True)
        m_cause_assoc[year] = m[year]
        f_cause_assoc[year] = f[year]

    # get all top10 causes
    cause_pool_m = []
    cause_pool_f = []
    cause_pool_m.append('rest')
    cause_pool_f.append('rest')
    for year in range(year_start, year_end):
        if (m_cause_assoc[year] != 0):
            for entry in m_cause_assoc[year][0:10]:
                if entry['cc'] not in cause_pool_m:
                    cause_pool_m.append(entry['cc'])
        if (f_cause_assoc[year] != 0):
            for entry in f_cause_assoc[year][0:10]:
                if entry['cc'] not in cause_pool_f:
                    cause_pool_f.append(entry['cc'])

    # create the output arrays
    output_m = {}
    output_f = {}
    for year in range(year_start, year_end):
        if (m_cause_assoc[year] != 0):
            output_m[year] = {}
            output_f[year] = {}
            output_m[year]['rest'] = {'num': 0, 'pop': 0}
            output_f[year]['rest'] = {'num': 0, 'pop': 0}
            for entry in m_cause_assoc[year]:
                is_top10_cause = False
                for cause in cause_pool_m:
                    if (entry['cc'] == cause):
                        output_m[year][entry['cc']] = {'num': entry['num'], 'pop': entry['pop']}
                        is_top10_cause = True
                if (not is_top10_cause):
                    output_m[year]['rest']['num'] += entry['num']
                    output_m[year]['rest']['pop'] += entry['pop']
            for entry in f_cause_assoc[year]:
                is_top10_cause = False
                for cause in cause_pool_f:
                    if (entry['cc'] == cause):
                        output_f[year][entry['cc']] = {'num': entry['num'], 'pop': entry['pop']}
                        is_top10_cause = True
                if (not is_top10_cause):
                    output_f[year]['rest']['num'] += entry['num']
                    output_f[year]['rest']['pop'] += entry['pop']

    # print the male output arrays
    print "Development of male cancer cause bettwen the years %d and %d in %s" % (year_start, year_end, cn)
    print "cause",
    for cause in cause_pool_m:
        print cause,
    print ""
    for year in range(year_start, year_end):
        if (m_cause_assoc[year] != 0):
            print year,
            for cause in cause_pool_m:
                print output_m[year][cause]['pop'],
            print ""
        else:
            print "%d no data" % year
    print ""

    # print the female output arrays
    print "Development of female cancer cause bettwen the years %d and %d in %s" % (year_start, year_end, cn)
    print "cause",
    for cause in cause_pool_f:
        print cause,
    print ""
    for year in range(year_start, year_end):
        if (f_cause_assoc[year] != 0):
            print year,
            for cause in cause_pool_f:
                print output_f[year][cause]['pop'],
            print ""
        else:
            print "%d no data" % year
    print ""



# This gets all deaths, population, and deaths related to cause range
# for a given country, cause range and year range
#
def get_deaths(country_code, cause_range, year_range):
    m_cause = []
    f_cause = []
    d_a = []
    p_a = []
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
    m_cause = get_causes_for_country(country_code, cause, year_query, 1)
    f_cause = get_causes_for_country(country_code, cause, year_query, 2)
    # Retrieve total males and females that died
    d_a = deaths_all_range(country_code, year_query)
    p_a = population_range(country_code, year_query)
    for year in range(year_range[0], year_range[1]+1):
        # All male and female population for a given year
        mpop = 0
        fpop = 0
        for entry in p_a:
            if (entry[0] == year):
                if (entry[1] == 1):
                    mpop = entry[2]
                if (entry[1] == 2):
                    fpop = entry[2]
        f_pop[year] = fpop
        m_pop[year] = mpop
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
        if ((mda == 0) | (fda == 0) | (mpop == 0) | (fpop == 0)):
            m_pop[year] = 0
            f_pop[year] = 0
            m_all[year] = 0
            f_all[year] = 0
            m_die[year] = 0
            f_die[year] = 0
            print_no_newline("n/a, ")
        # Now do some maths
        else:
            print_no_newline("%d " % year)
            # males
            deaths = 0
            for entry in m_cause:
                if (entry[0] == year):
                    deaths += entry[2]
            m_die[year] = deaths
            # females
            deaths = 0
            for entry in f_cause:
                if (entry[0] == year):
                    deaths += entry[2]
            f_die[year] = deaths
    print ""
    return(m_all, f_all, m_pop, f_pop, m_die, f_die)




# This prints all cause_range-related deaths over all years in a given country
# The data can be:
#               *   a detailed report (mode: default)
#               *   total numbers  (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
#
def deaths(country_query, cause_range, cause_name, year_start, year_end, mode):
    m_all = {}
    f_all = {}
    m_pop = {}
    f_pop = {}
    m_die = {}
    f_die = {}
    # Get the country code (cc) and country name cn from user
    (cc, cn) = get_country(country_query)
    cause_start = cause_range[0]
    cause_end = cause_range[1]
    print_no_newline("Retrieving data: ")
    (m_all,f_all,m_pop,f_pop,m_die,f_die) = get_deaths(cc, [cause_start, cause_end], [year_start, year_end])

    # Output
    if (mode == "def"):
        print "Deaths in %s caused by %s:" % (cn, cause_name)
        print "Year | All_deceased Female Male | Cause_victims Female Male | % of Population Female Male | % of All_deceased Female Male"
        for year in range(year_start, year_end+1):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            all_deceased = "%d %d %d" % (m_all[year] + f_all[year], f_all[year], m_all[year])
            cause_victims = "%d %d %d" % (m_die[year] + f_die[year], f_die[year], m_die[year])
            pop = "%f %f %f" % (round((float(m_die[year] + f_die[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(f_die[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(m_die[year]) / (m_pop[year] + f_pop[year])) * 100,6))
            rel = "%f %f %f" % (round((float(m_die[year] + f_die[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(f_die[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(m_die[year]) / (m_all[year] + f_all[year])) * 100,6))
            print "%d %s %s %s %s" % (year, all_deceased, cause_victims, pop, rel)
    if (mode == "num"):
        print "Deaths in %s caused by %s:" % (cn, cause_name)
        print "Year | Cause_victims Female Male "
        for year in range(year_start, year_end+1):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            cause_victims = "%d %d %d" % (m_die[year] + f_die[year], f_die[year], m_die[year])
            print "%d %s" % (year, cause_victims)
    if (mode == "pop"):
        print "Deaths in %s caused by %s:" % (cn, cause_name)
        print "Year | % of Pop Female Male"
        for year in range(year_start, year_end+1):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            pop = "%f %f %f" % (round((float(m_die[year] + f_die[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(f_die[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(m_die[year]) / (m_pop[year] + f_pop[year])) * 100,6))
            print "%d %s" % (year, pop)
    if (mode == "rel"):
        print "Deaths in %s caused by %s:" % (cn, cause_name)
        print "Year | % of All_deceased Female Male"
        for year in range(year_start, year_end+1):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            rel = "%f %f %f" % (round((float(m_die[year] + f_die[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(f_die[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(m_die[year]) / (m_all[year] + f_all[year])) * 100,6))
            print "%d %s" % (year, rel)


# This prints all cause_range-related deaths over all years in all EU and neighboring countries
# (the list is not the most exhastive as smaller states like Bosnia, Monaco, and big neighbors like Belarus, Ukraine, are missing from it)
#
# The data can be:
#               *   total numbers (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
# All of the output is divided by gender, and a total output for male and female deaths is added to it
def deaths_eu(cause_range, cause_name, year_start, year_end, mode):
    m_all = {}
    f_all = {}
    m_pop = {}
    f_pop = {}
    m_die = {}
    f_die = {}
    m_a_tmp = {}
    f_a_tmp = {}
    m_p_tmp = {}
    f_p_tmp = {}
    m_d_tmp = {}
    f_d_tmp = {}
    cause_start = cause_range[0]
    cause_end = cause_range[1]
    for i in range(len(eu_codes)):
        country_code = eu_codes[i]
        country_name = eu_names[i]
        print_no_newline("Retrieving data for %s: " % country_name)
        (m_a,f_a,m_p,f_p,m_d,f_d) = get_deaths(country_code, [cause_start, cause_end], [year_start, year_end])
        m_a_tmp[country_name] = m_a
        f_a_tmp[country_name] = f_a
        m_p_tmp[country_name] = m_p
        f_p_tmp[country_name] = f_p
        m_d_tmp[country_name] = m_d
        f_d_tmp[country_name] = f_d
    print ""

    # oh gee now we have to flip the arrays
    for year in range(year_start, year_end+1):
        m_all[year] = {}
        f_all[year] = {}
        m_pop[year] = {}
        f_pop[year] = {}
        m_die[year] = {}
        f_die[year] = {}
        for i in range(len(eu_names)):
            country_name = eu_names[i]
            # if we lack data zero everything else
            if ((m_a_tmp[country_name][year] == 0) | (f_a_tmp[country_name][year] == 0) | (m_p_tmp[country_name][year] == 0) | (f_p_tmp[country_name][year] == 0)):
                m_all[year][country_name] = 0
                f_all[year][country_name] = 0
                m_pop[year][country_name] = 0
                f_pop[year][country_name] = 0
                m_die[year][country_name] = 0
                f_die[year][country_name] = 0
            else:
                m_all[year][country_name] = m_a_tmp[country_name][year]
                f_all[year][country_name] = f_a_tmp[country_name][year]
                m_pop[year][country_name] = m_p_tmp[country_name][year]
                f_pop[year][country_name] = f_p_tmp[country_name][year]
                m_die[year][country_name] = m_d_tmp[country_name][year]
                f_die[year][country_name] = f_d_tmp[country_name][year]

    # Output
    if (mode == 'num'):
        cc_string = ""
        print "Deaths in Europe caused by %s between the years %s and %s (female):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if f_all[year][cn] == 0:
                    print "",
                else:
                    print f_die[year][cn],
            print ""
        print ""
        print "Deaths in Europe caused by %s between the years %s and %s (male):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print m_die[year][cn],
            print ""
        print ""
        print "Deaths in Europe caused by %s between the years %s and %s (all):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print f_die[year][cn]+m_die[year][cn],
            print ""
        print ""
    if (mode == 'pop'):
        cc_string = ""
        print "Deaths in Europe caused by %s between the years %s and %s (female, %% of Pop):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print round(float(f_die[year][cn]) / (m_pop[year][cn] + f_pop[year][cn]) * 100,6),
            print ""
        print ""
        print "Deaths in Europe caused by %s between the years %s and %s (male, %% of Pop):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print round(float(m_die[year][cn]) / (m_pop[year][cn] + f_pop[year][cn]) * 100,6),
            print ""
        print ""
        print "Deaths in Europe caused by %s between the years %s and %s (all, %% of Pop):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print round(float(m_die[year][cn]+f_die[year][cn]) / (m_pop[year][cn] + f_pop[year][cn]) * 100,6),
            print ""
        print ""
    if (mode == 'rel'):
        cc_string = ""
        print "Deaths in Europe caused by %s between the years %s and %s (female, %% of deaths):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if f_all[year][cn] == 0:
                    print "",
                else:
                    print round(float(f_die[year][cn]) / (m_all[year][cn] + f_all[year][cn]) * 100,6),
            print ""
        print ""
        print "Deaths in Europe caused by %s between the years %s and %s (male, %% of deaths):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print round(float(m_die[year][cn]) / (m_all[year][cn] + f_all[year][cn]) * 100,6),
            print ""
        print ""
        print "Deaths in Europe caused by %s between the years %s and %s (all, %% of deaths):" % (cause_name, year_start, year_end)
        print "Year " + " ".join(eu_names)
        for year in range(year_start, year_end+1):
            print year,
            for cn in eu_names:
                if m_all[year][cn] == 0:
                    print "",
                else:
                    print round(float(m_die[year][cn]+f_die[year][cn]) / (m_all[year][cn] + f_all[year][cn]) * 100,6),
            print ""
        print ""



#############################   MAIN
#############################


### Get some task or exit
if (len(sys.argv) > 1):
    task = sys.argv[1]
else:
    sys.exit("Usage: ./deaths.py [ top10_causes | cancer_top10_causes | cancer_top10_full | cancer_deaths | suicide_deaths | cancer_eu | suicide_eu ]")


# This prints the top10 unabbreviated causes within a cause range for a given year
# The data is in percentage of country's total population for given year (mode: pop)
if (task == "top10_causes"):
    if (len(sys.argv) > 6):
        country_query = sys.argv[2]
        cause_start = sys.argv[3]
        cause_end = sys.argv[4]
        year = int(sys.argv[5])
        short = sys.argv[6]

        if ((short=='short') | (short=='long')):
            top10_causes(country_query, [cause_start, cause_end], year, short)
        else:
            sys.exit("Usage: ./deaths.py top10_causes <country_name> <cause_start> <cause_end> <year> [short|long]")
    else:
        sys.exit("Usage: ./deaths.py top10_causes <country_name> <cause_start> <cause_end> <year> [short|long]")


# This prints the top10 unabbreviated causes for a given year
# The data is in percentage of country's total population for given year (mode: pop)
# The abbreviated causes used elsewhere are eg. C34 (malignant neoplasm of bronhchus and lungs)
# The detailed causes used in many EU countries after 2010 are like eg. C341 (malignant neoplasm of upper lobe, bronchus or lung)
elif (task == "cancer_top10_causes"):
    if (len(sys.argv) > 4):
        country_query = sys.argv[2]
        year = int(sys.argv[3])
        short = sys.argv[4]

        if ((short=='short') | (short=='long')):
            cancer_top10_causes(country_query, year, short)
        else:
            sys.exit("Usage: ./deaths.py cancer_top10_causes <country_name> <year> <short|long>]")
    else:
        sys.exit("Usage: ./deaths.py cancer_top10_causes <country_name> <year> <short|long>]")


# This prints top10 causes of cancer over all years in a given country
# The data is in percentage of country's total population (mode: pop)
elif (task == "cancer_top10_full"):
    if (len(sys.argv) > 4):
        country_query = sys.argv[2]
        year_start = int(sys.argv[3])
        year_end = int(sys.argv[4])

        cancer_top10_full(country_query, year_start, year_end)
    else:
        sys.exit("Usage: ./deaths.py cancer_top10_full <country_name> <year_start> <year_end>")


# This prints all cancer-related deaths over all years in a given country
# The data can be:
#               *   a detailed report (mode: default)
#               *   death numbers  (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
elif (task == "cancer_deaths"):
    if (len(sys.argv) > 5):
        country_query = sys.argv[2]
        year_start = int(sys.argv[3])
        year_end = int(sys.argv[4])
        mode = sys.argv[5]

        deaths(country_query, ['c00', 'd48'], 'cancer', year_start, year_end, mode)
    else:
        sys.exit("Usage: ./deaths.py cancer_deaths <country_name> <year_start> <year_end> <def | num | pop | rel>")


# This prints all suicides over all years in a given country
# The data can be:
#               *   a detailed report (mode: default)
#               *   death numbers  (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
elif (task == "suicide_deaths"):
    if (len(sys.argv) > 5):
        country_query = sys.argv[2]
        year_start = int(sys.argv[3])
        year_end = int(sys.argv[4])
        mode = sys.argv[5]

        deaths(country_query, ['x60', 'x84'], 'suicide', year_start, year_end, mode)
    else:
        sys.exit("Usage: ./deaths.py suicide_deaths <country_name> <year_start> <year_end> <def | num | pop | rel>")


# This prints all cancer-related deaths over all years in all EU and neighboring countries
# The data can be:
#               *   a detailed report (mode: default)
#               *   death numbers  (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
elif (task == "cancer_eu"):
    if (len(sys.argv) > 4):
        year_start = int(sys.argv[2])
        year_end = int(sys.argv[3])
        mode = sys.argv[4]

        deaths_eu(['c00','d48'], 'cancer', year_start, year_end, mode)
    else:
        sys.exit("Usage: ./deaths.py cancer_eu <year_start> <year_end> <num | pop | rel>")


# This prints all suicides over all years in all EU and neighboring countries
# The data can be:
#               *   a detailed report (mode: default)
#               *   death numbers  (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
elif (task == "suicide_eu"):
    if (len(sys.argv) > 4):
        year_start = int(sys.argv[2])
        year_end = int(sys.argv[3])
        mode = sys.argv[4]

        deaths_eu(['x60','x84'], 'suicide', year_start, year_end, mode)
    else:
        sys.exit("Usage: ./deaths.py suicide_eu <year_start> <year_end> <num | pop | rel>")

else:
    sys.exit("Usage: ./deaths.py [ top10_causes | cancer_top10_causes | cancer_top10_full | cancer_deaths | suicide_deaths | cancer_eu | suicide_eu ]")
