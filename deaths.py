#!/usr/bin/python
#
# A script to analyze data from the WHO Mortality Database (http://www.who.int/healthinfo/mortality_data/en/)
# Currently focused mostly on cancer-related deaths.
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


# This prints all cancer-related deaths over all years in a given country
# The data can be:
#               *   a detailed report (mode: default)
#               *   total numbers  (mode: num)
#               *   percentage of country's total population in the given year (mode: pop)
#               *   percentage of country's total deaths in the given year (mode: rel)
def cancer_deaths(country_query, year_start, year_end, mode):
    m_all = {}
    f_all = {}
    m_cause = []
    f_cause = []
    m_pop = {}
    f_pop = {}
    deaths_m = {}
    deaths_f = {}
    # Get the country code (cc) and country name cn from user
    (cc, cn) = get_country(country_query)
    cause = "BETWEEN 'c00' AND 'd48'"
    year_query = "BETWEEN %d AND %d" % (year_start, year_end)
    # Retrieve total males and females that died of cancer
    m_cause = get_causes_for_country(cc, cause, year_query, 1)
    f_cause = get_causes_for_country(cc, cause, year_query, 2)
    for year in range(year_start, year_end):
        # Retrieve total mortality for year
        mda = deaths_all(cc, year, 1)
        fda = deaths_all(cc, year, 2)
        m_all[year] = mda
        f_all[year] = fda
        if ((mda == 0) | (fda == 0)):
            print "Processing data for %d .. no data" % year
            continue
        else:
            print "Processing data for %d" % year
        # All male and female population for a given year
        m_pop[year] = population(cc, year, 1)
        f_pop[year] = population(cc, year, 2)
        # Now do some maths - males
        deaths = 0
        for entry in m_cause:
            if (entry[0] == year):
                deaths += entry[2]
        deaths_m[year] = deaths
        deaths = 0
        # Now do some maths - females
        for entry in f_cause:
            if (entry[0] == year):
                deaths += entry[2]
        deaths_f[year] = deaths

    # Output
    if (mode == "def"):
        print "Deaths in %s caused by cancer:" % (cn)
        print "Year | All_deceased Female Male | Cancer_victims Female Male | % of Population Female Male | % of All_deceased Female Male"
        for year in range(year_start, year_end):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            all_deceased = "%d %d %d" % (m_all[year] + f_all[year], f_all[year], m_all[year])
            cancer_victims = "%d %d %d" % (deaths_m[year] + deaths_f[year], deaths_f[year], deaths_m[year])
            pop = "%f %f %f" % (round((float(deaths_m[year] + deaths_f[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(deaths_f[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(deaths_m[year]) / (m_pop[year] + f_pop[year])) * 100,6))
            rel = "%f %f %f" % (round((float(deaths_m[year] + deaths_f[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(deaths_f[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(deaths_m[year]) / (m_all[year] + f_all[year])) * 100,6))
            print "%d %s %s %s %s" % (year, all_deceased, cancer_victims, pop, rel)
    if (mode == "num"):
        print "Deaths in %s caused by cancer:" % (cn)
        print "Year | Cancer_victims Female Male "
        for year in range(year_start, year_end):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            cancer_victims = "%d %d %d" % (deaths_m[year] + deaths_f[year], deaths_f[year], deaths_m[year])
            print "%d %s" % (year, cancer_victims)
    if (mode == "pop"):
        print "Deaths in %s caused by cancer:" % (cn)
        print "Year | % of Pop Female Male"
        for year in range(year_start, year_end):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            pop = "%f %f %f" % (round((float(deaths_m[year] + deaths_f[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(deaths_f[year]) / (m_pop[year] + f_pop[year])) * 100,6), round((float(deaths_m[year]) / (m_pop[year] + f_pop[year])) * 100,6))
            print "%d %s" % (year, pop)
    if (mode == "rel"):
        print "Deaths in %s caused by cancer:" % (cn)
        print "Year | % of All_deceased Female Male"
        for year in range(year_start, year_end):
            if m_all[year] == 0:
                print "%d no data" % year
                continue
            rel = "%f %f %f" % (round((float(deaths_m[year] + deaths_f[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(deaths_f[year]) / (m_all[year] + f_all[year])) * 100,6), round((float(deaths_m[year]) / (m_all[year] + f_all[year])) * 100,6))
            print "%d %s" % (year, rel)




#############################   MAIN
#############################


### Get some task or exit
if (len(sys.argv) > 1):
    task = sys.argv[1]
else:
    sys.exit("Usage: ./deaths.py [ top10_causes | cancer_top10_causes | cancer_top10_full | cancer_deaths ]")


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

        cancer_deaths(country_query, year_start, year_end, mode)
    else:
        sys.exit("Usage: ./deaths.py cancer_deaths <country_name> <year_start> <year_end> <def | num | pop | rel>")

else:
    sys.exit("Usage: ./deaths.py [ top10_causes | cancer_top10_causes | cancer_top10_full | cancer_deaths ]")
