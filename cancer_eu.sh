#!/bin/bash
#
# this runs deaths.py on all EU and neighboring countries
# displays basic stats of cancer-related mortality for all countries
# more detailed info can be gather by deaths.py
#
# gnd, 2016-2018
#####################################################################
for k in {austri,belgi,bosni,bulga,croat,cypru,czech,denma,eston,finla,franc,germa,greec,hunga,icela,irela,italy,kosov,latvi,lithu,luxem,maced,malta,moldo,monte,nethe,polan,portu,roman,serbi,slova,slove,spain,swede,switz,ukrai,unite}
do
	./deaths.py cancer_deaths $k 1994 2018 def
done
