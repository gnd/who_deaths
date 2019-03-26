#!/usr/bin/python
#
# This imports .csv files from WHO Mortality Database (http://www.who.int/healthinfo/mortality_data/en/) into mysql
#
# gnd, 2018 - 2019
#######################################################
import MySQLdb
import csv
import sys
import ConfigParser

config = ConfigParser.ConfigParser()
config.read("db.conf")
dbhost = config.get("mysql", "dbhost")
dbuser = config.get("mysql", "dbuser")
dbpass = config.get("mysql", "dbpass")
dbname = config.get("mysql", "dbname")
who_data_dir = config.get("data", "who_data_dir")
data_year = config.get("data", "data_year")
if ((not dbhost) | (not dbuser) | (not dbname)):
    sys.exit("Please provide some credentials & location of WHO data")
if (not who_data_dir):
    sys.exit("Please provide the location of the WHO data (who_data_dir)")

db = MySQLdb.connect(dbhost, dbuser, dbpass, dbname)
cur = db.cursor()

'''
Use the following queries (copy & paste) to create tables, then populate them by running the script
Change the year for the year in the db.conf file

CREATE TABLE `data_2019` (
  `Country` smallint(6) DEFAULT NULL,
  `Admin1` varchar(255) DEFAULT NULL,
  `SubDiv` varchar(255) DEFAULT NULL,
  `Year` smallint(6) DEFAULT NULL,
  `List` varchar(255) DEFAULT NULL,
  `Cause` varchar(255) DEFAULT NULL,
  `Sex` tinyint(4) DEFAULT NULL,
  `Frmat` varchar(255) DEFAULT NULL,
  `IM_Frmat` varchar(255) DEFAULT NULL,
  `Deaths1` int(11) DEFAULT NULL,
  `Deaths2` int(11) DEFAULT NULL,
  `Deaths3` int(11) DEFAULT NULL,
  `Deaths4` int(11) DEFAULT NULL,
  `Deaths5` int(11) DEFAULT NULL,
  `Deaths6` int(11) DEFAULT NULL,
  `Deaths7` int(11) DEFAULT NULL,
  `Deaths8` int(11) DEFAULT NULL,
  `Deaths9` int(11) DEFAULT NULL,
  `Deaths10` int(11) DEFAULT NULL,
  `Deaths11` int(11) DEFAULT NULL,
  `Deaths12` int(11) DEFAULT NULL,
  `Deaths13` int(11) DEFAULT NULL,
  `Deaths14` int(11) DEFAULT NULL,
  `Deaths15` int(11) DEFAULT NULL,
  `Deaths16` int(11) DEFAULT NULL,
  `Deaths17` int(11) DEFAULT NULL,
  `Deaths18` int(11) DEFAULT NULL,
  `Deaths19` int(11) DEFAULT NULL,
  `Deaths20` int(11) DEFAULT NULL,
  `Deaths21` int(11) DEFAULT NULL,
  `Deaths22` int(11) DEFAULT NULL,
  `Deaths23` int(11) DEFAULT NULL,
  `Deaths24` int(11) DEFAULT NULL,
  `Deaths25` int(11) DEFAULT NULL,
  `Deaths26` int(11) DEFAULT NULL,
  `IM_Deaths1` int(11) DEFAULT NULL,
  `IM_Deaths2` int(11) DEFAULT NULL,
  `IM_Deaths3` int(11) DEFAULT NULL,
  `IM_Deaths4` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `countries_2019` (
  `Country` smallint(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `population_2019` (
  `Country` smallint(6) DEFAULT NULL,
  `Admin1` varchar(255) DEFAULT NULL,
  `SubDiv` varchar(255) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Sex` int(11) DEFAULT NULL,
  `Frmat` varchar(255) DEFAULT NULL,
  `Pop1` int(11) DEFAULT NULL,
  `Pop2` int(11) DEFAULT NULL,
  `Pop3` int(11) DEFAULT NULL,
  `Pop4` int(11) DEFAULT NULL,
  `Pop5` int(11) DEFAULT NULL,
  `Pop6` int(11) DEFAULT NULL,
  `Pop7` int(11) DEFAULT NULL,
  `Pop8` int(11) DEFAULT NULL,
  `Pop9` int(11) DEFAULT NULL,
  `Pop10` int(11) DEFAULT NULL,
  `Pop11` int(11) DEFAULT NULL,
  `Pop12` int(11) DEFAULT NULL,
  `Pop13` int(11) DEFAULT NULL,
  `Pop14` int(11) DEFAULT NULL,
  `Pop15` int(11) DEFAULT NULL,
  `Pop16` int(11) DEFAULT NULL,
  `Pop17` int(11) DEFAULT NULL,
  `Pop18` int(11) DEFAULT NULL,
  `Pop19` int(11) DEFAULT NULL,
  `Pop20` int(11) DEFAULT NULL,
  `Pop21` int(11) DEFAULT NULL,
  `Pop22` int(11) DEFAULT NULL,
  `Pop23` int(11) DEFAULT NULL,
  `Pop24` int(11) DEFAULT NULL,
  `Pop25` int(11) DEFAULT NULL,
  `Pop26` int(11) DEFAULT NULL,
  `Lb` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
'''

print "Importing data pt.1"
cursor = db.cursor()
Query = """ LOAD DATA LOCAL INFILE '%s/Morticd10_part1' INTO TABLE
data_%s FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED
BY '"' Lines terminated by '\r\n' IGNORE 1 LINES """ % (who_data_dir, data_year)
cursor.execute(Query)
db.commit()

print "Importing data pt.2"
cursor = db.cursor()
Query = """ LOAD DATA LOCAL INFILE '%s/Morticd10_part2' INTO TABLE
data_%s FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED
BY '"' Lines terminated by '\r\n' IGNORE 1 LINES """ % (who_data_dir, data_year)
cursor.execute(Query)
db.commit()

print "Importing country codes"
cursor = db.cursor()
Query = """ LOAD DATA LOCAL INFILE '%s/country_codes' INTO TABLE
countries_%s FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED
BY '"' Lines terminated by '\r\n' IGNORE 1 LINES """ % (who_data_dir, data_year)
cursor.execute(Query)
db.commit()

print "Importing population data"
cursor = db.cursor()
Query = """ LOAD DATA LOCAL INFILE '%s/pop' INTO TABLE
population_%s FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED
BY '"' Lines terminated by '\r\n' IGNORE 1 LINES """ % (who_data_dir, data_year)
cursor.execute(Query)
db.commit()

print "Done"
cursor.close()
