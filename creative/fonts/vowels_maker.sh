#!/bin/bashe
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の母音符号のタイムスタンプを更新します。"
    touch "${dirname}"/uni0041.svg
    touch "${dirname}"/uni0045.svg
    touch "${dirname}"/uni0049.svg
    touch "${dirname}"/uni004f.svg
    touch "${dirname}"/uni0055.svg
    touch "${dirname}"/uni0057.svg
    echo "ディレクトリ${dirname}の母音符号のタイムスタンプを更新しました。"
done
