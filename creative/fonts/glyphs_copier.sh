#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の基本大文字から基本小文字へのコピーをします。"
    cp "${dirname}"/uni0041.svg "${dirname}"/uni0061.svg
    cp "${dirname}"/uni0042.svg "${dirname}"/uni0062.svg
    cp "${dirname}"/uni0043.svg "${dirname}"/uni0063.svg
    cp "${dirname}"/uni0044.svg "${dirname}"/uni0064.svg
    cp "${dirname}"/uni0045.svg "${dirname}"/uni0065.svg
    cp "${dirname}"/uni0046.svg "${dirname}"/uni0066.svg
    cp "${dirname}"/uni0047.svg "${dirname}"/uni0067.svg
    cp "${dirname}"/uni0048.svg "${dirname}"/uni0068.svg
    cp "${dirname}"/uni0049.svg "${dirname}"/uni0069.svg
    cp "${dirname}"/uni004a.svg "${dirname}"/uni006a.svg
    cp "${dirname}"/uni004b.svg "${dirname}"/uni006b.svg
    cp "${dirname}"/uni004c.svg "${dirname}"/uni006c.svg
    cp "${dirname}"/uni004d.svg "${dirname}"/uni006d.svg
    cp "${dirname}"/uni004e.svg "${dirname}"/uni006e.svg
    cp "${dirname}"/uni004f.svg "${dirname}"/uni006f.svg
    cp "${dirname}"/uni0050.svg "${dirname}"/uni0070.svg
    cp "${dirname}"/uni0051.svg "${dirname}"/uni0071.svg
    cp "${dirname}"/uni0052.svg "${dirname}"/uni0072.svg
    cp "${dirname}"/uni0053.svg "${dirname}"/uni0073.svg
    cp "${dirname}"/uni0054.svg "${dirname}"/uni0074.svg
    cp "${dirname}"/uni0055.svg "${dirname}"/uni0075.svg
    cp "${dirname}"/uni0056.svg "${dirname}"/uni0076.svg
    cp "${dirname}"/uni0057.svg "${dirname}"/uni0077.svg
    cp "${dirname}"/uni0058.svg "${dirname}"/uni0078.svg
    cp "${dirname}"/uni0059.svg "${dirname}"/uni0079.svg
    cp "${dirname}"/uni005a.svg "${dirname}"/uni007a.svg
    echo "ディレクトリ${dirname}の基本大文字から基本小文字へのコピーが完了しました。"
done
