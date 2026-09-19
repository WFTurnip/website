#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "silwki" "xavani" "xesada" "xidili")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の基本文字のタイムスタンプを更新します。"
    touch "${dirname}"/uni0021.svg # !
    touch "${dirname}"/uni0022.svg # "
    touch "${dirname}"/uni0023.svg # #
    touch "${dirname}"/uni0024.svg # $
    touch "${dirname}"/uni0025.svg # %
    touch "${dirname}"/uni0026.svg # &
    touch "${dirname}"/uni0027.svg # '
    touch "${dirname}"/uni002a.svg # *
    touch "${dirname}"/uni002b.svg # +
    touch "${dirname}"/uni002c.svg # ,
    touch "${dirname}"/uni002d.svg # -
    touch "${dirname}"/uni002e.svg # .
    touch "${dirname}"/uni002f.svg # /
    touch "${dirname}"/uni0030.svg # 0
    touch "${dirname}"/uni003a.svg # :
    touch "${dirname}"/uni003b.svg # ;
    touch "${dirname}"/uni003c.svg # <
    touch "${dirname}"/uni003d.svg # =
    touch "${dirname}"/uni003e.svg # >
    touch "${dirname}"/uni003f.svg # ?
    touch "${dirname}"/uni0040.svg # @
    touch "${dirname}"/uni005c.svg # \\
    touch "${dirname}"/uni005e.svg # ^
    touch "${dirname}"/uni005f.svg # _
    touch "${dirname}"/uni0060.svg # `
    touch "${dirname}"/uni007c.svg # |
    touch "${dirname}"/uni007e.svg # ~
    echo "ディレクトリ${dirname}の基本文字のタイムスタンプを更新しました。"
done
