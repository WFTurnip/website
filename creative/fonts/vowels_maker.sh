#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の母音符号のタイムスタンプを更新します。"
    touch "${dirname}"/uni0041.svg # A
    touch "${dirname}"/uni0045.svg # E
    touch "${dirname}"/uni0049.svg # I
    touch "${dirname}"/uni004f.svg # O
    touch "${dirname}"/uni0055.svg # U
    touch "${dirname}"/uni0057.svg # W
    echo "ディレクトリ${dirname}の母音符号のタイムスタンプを更新しました。"
done
