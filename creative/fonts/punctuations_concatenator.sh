#!/bin/bash
echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
cat "${dirname}"/uni0030.svg "${dirname}"/uni002f.svg >"${dirname}"/uni0025.svg                          # CONCATENATE 0 / > %
cat "${dirname}"/uni0051.svg "${dirname}"/uni003e.svg "${dirname}"/uni0027.svg >"${dirname}"/uni0026.svg # CONCATENATE Q > ' > &
cat "${dirname}"/uni002c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni003b.svg                          # CONCATENATE , 0 > ;
cat "${dirname}"/uni002e.svg "${dirname}"/uni0030.svg >"${dirname}"/uni003a.svg                          # CONCATENATE . 0 > :
cat "${dirname}"/uni0052.svg "${dirname}"/uni0030.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0040.svg # CONCATENATE R 0 \\ > @
