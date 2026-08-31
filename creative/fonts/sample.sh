#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    cat ${dirname}/uni0046.svg ${dirname}/uni0054.svg >> ${dirname}/notdef.svg
    # cat ${dirname}/uni005b.svg ${dirname}/uni005d.svg >> ${dirname}/notdef.svg
    # cat ${dirname}/uni003f.svg >> ${dirname}/notdef.svg
    emacs -nw ${dirname}/notdef.svg
    inkscape ${dirname}/notdef.svg
done
