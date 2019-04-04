#!/bin/bash
#
# this fills the .js files for the eu_cancer_causes.html files
#########################################################
eu_names=(AT BE BG CR CY CZ DN EE FI FR DE GR HU IE IR IT LV LT LU MK MT MD ME NL PL PT RO RS SK SI ES SE CH UK)
eu_codes=(4010 4020 4030 4038 3080 4045 4050 4055 4070 4080 4085 4140 4150 4160 4170 4180 4186 4188 4190 4195 4200 4260 4207 4210 4230 4240 4270 4273 4274 4276 4280 4290 4300 4308)

for index in ${!eu_codes[*]}
do
    cn=`echo ${eu_names[$index]}| awk '{print tolower($0)}'`
    cc=${eu_codes[$index]}
    ./deaths.py cancer_top10_full "cc-"$cc 1994 2018 num chartjs > html/data/causes/$cn"_cancer_causes_num.js"
    printf "<script src=\"data/causes/%s_cancer_causes_num.js\"></script>\n" $cn
    ./deaths.py cancer_top10_full "cc-"$cc 1994 2018 pop chartjs > html/data/causes/$cn"_cancer_causes_pop.js"
    printf "<script src=\"data/causes/%s_cancer_causes_pop.js\"></script>\n" $cn
    ./deaths.py cancer_top10_full "cc-"$cc 1994 2018 rel chartjs > html/data/causes/$cn"_cancer_causes_rel.js"
    printf "<script src=\"data/causes/%s_cancer_causes_rel.js\"></script>\n" $cn
    ./deaths.py cancer_top10_full "cc-"$cc 1994 2018 100k chartjs > html/data/causes/$cn"_cancer_causes_100k.js"
    printf "<script src=\"data/causes/%s_cancer_causes_100k.js\"></script>\n" $cn
done
