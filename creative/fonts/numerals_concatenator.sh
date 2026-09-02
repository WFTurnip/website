#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    cat "${dirname}"/uni004b.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0031.svg
    cat "${dirname}"/uni0054.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0032.svg
    cat "${dirname}"/uni0053.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0033.svg
    cat "${dirname}"/uni0051.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0034.svg
    cat "${dirname}"/uni0052.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0035.svg
    cat "${dirname}"/uni0050.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0036.svg
    cat "${dirname}"/uni0048.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0037.svg
    cat "${dirname}"/uni0046.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0038.svg
    cat "${dirname}"/uni004d.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0039.svg
done
