#!/bin/bash
echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
echo "ディレクトリ${dirname}の母音符号を結合します。"
cat "${dirname}"/uni0049.svg "${dirname}"/uni0045.svg >"${dirname}"/uni0041.svg # CONCATENATE I E > A
cat "${dirname}"/uni0057.svg "${dirname}"/uni0055.svg >"${dirname}"/uni004f.svg # CONCATENATE W U > O
echo "ディレクトリ${dirname}の母音符号を結合しました。"
