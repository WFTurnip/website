#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の総文字のタイムスタンプを更新します。"
    touch "${dirname}"/*.svg
    echo "ディレクトリ${dirname}の総文字のタイムスタンプを更新しました。"
done

sh brakets_maker.sh
sh consonants_maker.sh
sh diacritics_maker.sh
sh numerals_maker.sh
sh punctuations_maker.sh
sh variants_consonants_maker.sh
sh vowels_maker.sh

open */
