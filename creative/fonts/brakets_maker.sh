#!/bin/bash
echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
touch "${dirname}"/uni003c.svg
touch "${dirname}"/uni003e.svg
touch "${dirname}"/uni0028.svg
touch "${dirname}"/uni0029.svg
touch "${dirname}"/uni005b.svg
touch "${dirname}"/uni005d.svg
touch "${dirname}"/uni007b.svg
touch "${dirname}"/uni007d.svg
