#!/bin/bash
echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
cat "${dirname}"/uni004b.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0031.svg # k 0 >1
cat "${dirname}"/uni0054.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0032.svg # t 0 >2
cat "${dirname}"/uni0053.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0033.svg # s 0 >3
cat "${dirname}"/uni0051.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0034.svg # q 0 >4
cat "${dirname}"/uni0052.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0035.svg # r 0 >5
cat "${dirname}"/uni0050.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0036.svg # p 0 >6
cat "${dirname}"/uni0048.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0037.svg # h 0 >7
cat "${dirname}"/uni0046.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0038.svg # f 0 >8
cat "${dirname}"/uni004d.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0039.svg # m 0 >9
