#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の基本文字のタイムスタンプを更新します。"
    touch "${dirname}"/uni003c.svg
    touch "${dirname}"/uni003e.svg
    touch "${dirname}"/uni0028.svg
    touch "${dirname}"/uni0029.svg
    touch "${dirname}"/uni005b.svg
    touch "${dirname}"/uni005d.svg
    touch "${dirname}"/uni007b.svg
    touch "${dirname}"/uni007d.svg
    echo "ディレクトリ${dirname}の基本文字のタイムスタンプを更新しました。"
done
