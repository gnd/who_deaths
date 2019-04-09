#!/usr/bin/python
#
# A script to process population pyramid data from https://www.populationpyramid.net/europe/2010/
#
# gnd, 2019
#######################################################################3
# this data is taken from the source of https://www.populationpyramid.net/europe/2010/
f = [{'v': 19097.169, 'k': '0-4'}, {'v': 17884.46, 'k': '5-9'}, {'v': 18259.139, 'k': '10-14'}, {'v': 21038.043, 'k': '15-19'}, {'v': 24802.121, 'k': '20-24'}, {'v': 25667.032, 'k': '25-29'}, {'v': 25729.62, 'k': '30-34'}, {'v': 26111.762, 'k': '35-39'}, {'v': 26619.865, 'k': '40-44'}, {'v': 28180.085, 'k': '45-49'}, {'v': 27449.341, 'k': '50-54'}, {'v': 25729.444, 'k': '55-59'}, {'v': 22024.627, 'k': '60-64'}, {'v': 17818.243, 'k': '65-69'}, {'v': 19040.716, 'k': '70-74'}, {'v': 14482.711, 'k': '75-79'}, {'v': 11736.206, 'k': '80-84'}, {'v': 6624.301, 'k': '85-89'}, {'v': 1967.506, 'k': '90-94'}, {'v': 633.978, 'k': '95-99'}, {'v': 73.456, 'k': '100+'}]
m = [{'v': 20122.084, 'k': '0-4'}, {'v': 18825.319, 'k': '5-9'}, {'v': 19201.642, 'k': '10-14'}, {'v': 22066.209, 'k': '15-19'}, {'v': 25775.013, 'k': '20-24'}, {'v': 26352.164, 'k': '25-29'}, {'v': 25976.48, 'k': '30-34'}, {'v': 26110.878, 'k': '35-39'}, {'v': 26352.663, 'k': '40-44'}, {'v': 27341.224, 'k': '45-49'}, {'v': 25746.113, 'k': '50-54'}, {'v': 23180.214, 'k': '55-59'}, {'v': 19407.747, 'k': '60-64'}, {'v': 14604.063, 'k': '65-69'}, {'v': 13829.064, 'k': '70-74'}, {'v': 9560.901, 'k': '75-79'}, {'v': 6342.744, 'k': '80-84'}, {'v': 2788.631, 'k': '85-89'}, {'v': 667.25, 'k': '90-94'}, {'v': 159.764, 'k': '95-99'}, {'v': 14.91, 'k': '100+'}]
p = 735394902

m_pop_by_age = {}
f_pop_by_age = {}
all_m = 0
all_f = 0
all = 0

for e in f:
    if ('+' not in e['k']):
        key = e['k'].split('-')[0]
        value = e['v']
        f_pop_by_age[key] = int(value*1000)
        all_f += int(value*1000)
        all += int(value*1000)
    else:
        key = '95'
        value = e['v']
        f_pop_by_age[key] += int(value*1000)
        all_f += int(value*1000)
        all += int(value*1000)

for e in m:
    if ('+' not in e['k']):
        key = e['k'].split('-')[0]
        value = e['v']
        m_pop_by_age[key] = int(value*1000)
        all_m += int(value*1000)
        all += int(value*1000)
    else:
        key = '95'
        value = e['v']
        m_pop_by_age[key] += int(value*1000)
        all_m += int(value*1000)
        all += int(value*1000)

print "# this is the EU average data for 2010 taken from https://www.populationpyramid.net/europe/2010/"
print "std_m_pop_by_age =",
print m_pop_by_age
print "std_f_pop_by_age =",
print f_pop_by_age
print "std_m_pop =",
print all_m
print "std_f_pop =",
print all_f
print "std_a_pop =",
print all

if (all == p):
    print "OK: Computed population %d size fits with given population size %d" % (all, p)
else:
    print "WARNING: computed population %d size doesnt fit with given population size %d" % (all,p)
