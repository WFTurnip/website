#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    cat "${dirname}"/uni004b.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.svg
    cat "${dirname}"/uni0054.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.svg
    cat "${dirname}"/uni0053.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.svg
    cat "${dirname}"/uni0051.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.svg
    cat "${dirname}"/uni0052.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.svg
    cat "${dirname}"/uni0050.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.svg
    cat "${dirname}"/uni0048.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.svg
    cat "${dirname}"/uni0046.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.svg
    cat "${dirname}"/uni004d.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.svg
    cat "${dirname}"/uni0053.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.svg
    cat "${dirname}"/uni0051.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.svg
    if [ "${dirname}" = "piswpi" ]; then
        cat "${dirname}"/uni0053.svg "${dirname}"/uni0027.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.svg
        cat "${dirname}"/uni0051.svg "${dirname}"/uni0027.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.svg
    fi
done
