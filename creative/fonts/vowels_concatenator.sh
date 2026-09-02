#!/bin/bash
echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
cat "${dirname}"/uni0049.svg "${dirname}"/uni0045.svg >"${dirname}"/uni0041.svg
cat "${dirname}"/uni0057.svg "${dirname}"/uni0055.svg >"${dirname}"/uni004f.svg
