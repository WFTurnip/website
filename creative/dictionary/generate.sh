#!/bin/bash

echo "ビルド用パッケージのアップデート開始"
npm install jsdom
npm install js-beautify
npm install json-beautify
echo "ビルド用パッケージのアップデート終了"

echo "どのフォルダ内部を作りますか？"
echo "html / json / favicon / all"

read -p ">>> " option

case "$option" in
html)
    node html_generater.js 
    ;;
json)
    node json_generater.js
    ;;
favicon)
    node favicon_generater.js
    ;;
all)
    node html_generater.js
    node json_generater.js
    node favicon_generater.js
    ;;
*)
    echo "無効な出力方式です。終了します。"
    exit 1
    ;;
esac
