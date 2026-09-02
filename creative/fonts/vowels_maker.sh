#!/bin/bash
echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " dirname
inkscape "${dirname}"/uni0041.svg
inkscape "${dirname}"/uni0045.svg
inkscape "${dirname}"/uni0049.svg
inkscape "${dirname}"/uni004f.svg
inkscape "${dirname}"/uni0055.svg
inkscape "${dirname}"/uni0057.svg
