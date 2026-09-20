#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の子音基本文字のタイムスタンプを更新します。"
    touch "${dirname}"/uni004b.svg
    touch "${dirname}"/uni0054.svg
    touch "${dirname}"/uni0053.svg
    touch "${dirname}"/uni0051.svg
    touch "${dirname}"/uni0052.svg
    touch "${dirname}"/uni0050.svg
    touch "${dirname}"/uni0048.svg
    touch "${dirname}"/uni0046.svg
    touch "${dirname}"/uni004d.svg
    echo "ディレクトリ${dirname}の子音基本文字のタイムスタンプを更新しました。"
done
