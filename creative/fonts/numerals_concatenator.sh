#!/bin/bash
echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
cat "${dirname}"/uni004b.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0031.svg # CONCATENATE K 0 >1
cat "${dirname}"/uni0054.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0032.svg # CONCATENATE T 0 >2
cat "${dirname}"/uni0053.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0033.svg # CONCATENATE S 0 >3
cat "${dirname}"/uni0051.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0034.svg # CONCATENATE Q 0 >4
cat "${dirname}"/uni0052.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0035.svg # CONCATENATE R 0 >5
cat "${dirname}"/uni0050.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0036.svg # CONCATENATE P 0 >6
cat "${dirname}"/uni0048.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0037.svg # CONCATENATE H 0 >7
cat "${dirname}"/uni0046.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0038.svg # CONCATENATE F 0 >8
cat "${dirname}"/uni004d.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0039.svg # CONCATENATE M 0 >9
