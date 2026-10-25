#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の音楽記号のタイムスタンプを更新します。"
    touch "${dirname}"/uni02ca.svg # 高揚音符
    touch "${dirname}"/uni02cf.svg # 低揚音符
    touch "${dirname}"/uni02cb.svg # 高抑音符
    touch "${dirname}"/uni02ce.svg # 低抑音符
    touch "${dirname}"/uni02c6.svg # 高昇音符
    touch "${dirname}"/unia788.svg # 低昇音符
    touch "${dirname}"/uni02c7.svg # 高降音符
    touch "${dirname}"/uni02ec.svg # 低降音符
    touch "${dirname}"/uni02c9.svg # 高平音符
    touch "${dirname}"/uni02cd.svg # 低平音符
    echo "ディレクトリ${dirname}の音楽記号のタイムスタンプを更新しました。"
done
