#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の総文字のタイムスタンプを更新します。"
    touch "${dirname}"/*.svg
    echo "ディレクトリ${dirname}の総文字のタイムスタンプを更新しました。"
done
sh consonants_maker.sh
sh variants_consonants_maker.sh
open */
