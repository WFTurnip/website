#!/bin/bash
echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
cat "${dirname}"/uni004b.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.svg                          # CONCATENATE K \ >G
cat "${dirname}"/uni0054.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.svg                          # CONCATENATE T \ >D
cat "${dirname}"/uni0053.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.svg                          # CONCATENATE S \ >Z
cat "${dirname}"/uni0051.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.svg                          # CONCATENATE Q \ >C
cat "${dirname}"/uni0052.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.svg                          # CONCATENATE R \ >L
cat "${dirname}"/uni0050.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.svg                          # CONCATENATE P \ >B
cat "${dirname}"/uni0048.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.svg                          # CONCATENATE H \ >X
cat "${dirname}"/uni0046.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.svg                          # CONCATENATE F \ >V
cat "${dirname}"/uni004d.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.svg                          # CONCATENATE M \ >N
cat "${dirname}"/uni0053.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.svg # CONCATENATE S \ 0 >J
cat "${dirname}"/uni0051.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.svg # CONCATENATE Q \ 0 >Y
if [ "${dirname}" = "piswpi" ]; then
    cat "${dirname}"/uni0053.svg "${dirname}"/uni0027.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.svg # CONCATENATE S ' 0 >J
    cat "${dirname}"/uni0051.svg "${dirname}"/uni0027.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.svg # CONCATENATE Q ' 0 >Y
fi
