#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の子音基本文字のタイムスタンプを更新します。"
    touch "${dirname}"/uni004b.svg # K
    touch "${dirname}"/uni0054.svg # T
    touch "${dirname}"/uni0053.svg # S
    touch "${dirname}"/uni0051.svg # Q
    touch "${dirname}"/uni0052.svg # R
    touch "${dirname}"/uni0050.svg # P
    touch "${dirname}"/uni0048.svg # H
    touch "${dirname}"/uni0046.svg # F
    touch "${dirname}"/uni004d.svg # M
    echo "ディレクトリ${dirname}の子音基本文字のタイムスタンプを更新しました。"
done
