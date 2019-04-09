#!/bin/bash
#
#   This creates animated gifs depicting the mortality rates for cancer
#   across all age groups and all EU countries between 1994 and 2018
#
#   Prerequisities are gifsicle and gnuplot (apt-get install gifsicle gnuplot)
#   Primary prerequisity is a imported WHO Mortality database & proper setup of deaths.py
#
#   gnd, 2019
#########################################################################################

# some globals
eu_names=(AT BE BG CR CY CZ DN EE FI FR DE GR HU IE IR IT LV LT LU MK MT MD ME NL PL PT RO RS SK SI ES SE CH UK)
eu_codes=(4010 4020 4030 4038 3080 4045 4050 4055 4070 4080 4085 4140 4150 4160 4170 4180 4186 4188 4190 4195 4200 4260 4207 4210 4230 4240 4270 4273 4274 4276 4280 4290 4300 4308)
maxx=110    # max age on plot
delay=50    # GIF frame delay

# Check if res exists and if not create it
if [ ! -d "res" ]; then
    echo "Creating res directory"
    mkdir res
fi

# Generate data & gif files
for index in ${!eu_codes[*]}
do
    cn=`echo ${eu_names[$index]}| awk '{print tolower($0)}'`
    cc=${eu_codes[$index]}
    ./deaths.py cancer_deaths_by_age "cc-"$cc 1994 2018 num animate | grep -v Found > "res/"$cn".tmp"
    max=`cat "res/"$cn".tmp"|grep max|awk {'print $2;'}`
    cat "res/"$cn".tmp" | grep -v max > "res/"$cn".data"
    row=2
    year=1993
    #plot "$source" using 1:$row title "$title" smooth csplines
    for i in {01..20}
    do
        row=$((row + 1))
        filename="res/"$cn"_"$i".gif"
        source="res/"$cn".data"
        year=$((year + 1))
        title="$cn $year"
        gnuplot -persist <<-EOFMarker
            set xrange [0:$maxx]
            set yrange [0:$max]
            set style line 100 lt 1 lc rgb "gray" lw 2
            set style line 101 lt 0.5 lc rgb "gray" lw 1
            set grid mytics ytics ls 100, ls 101
            set grid mxtics xtics ls 100, ls 101
            set terminal gif size 1024,768 enhanced font "Helvetica,20"
            set output "$filename"
            plot "$source" using 1:$row notitle with points linestyle 1, \
                "" using 1:$row notitle smooth csplines with lines linestyle 1, \
                1 / 0 title "$title" with linespoints linestyle 1
EOFMarker
    done
    rm "res/"$cn".tmp"
    gifsicle --delay=$delay --loopcount=forever "res/"$cn"_"*.gif > res/$cn".gif"
    rm "res/"$cn"_"*.gif
done
