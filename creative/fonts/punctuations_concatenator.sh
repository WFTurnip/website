#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    cat "${dirname}"/uni0030.svg "${dirname}"/uni002f.svg >"${dirname}"/uni0025.svg
    cat "${dirname}"/uni0051.svg "${dirname}"/uni003e.svg "${dirname}"/uni0027.svg >"${dirname}"/uni0026.svg
    cat "${dirname}"/uni002c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni003b.svg
    cat "${dirname}"/uni002e.svg "${dirname}"/uni0030.svg >"${dirname}"/uni003a.svg
    cat "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni00b6.svg
done
