#!/bin/bash
set -e
echo "ビルド用パッケージを確認しています..."
if [ ! -d "node_modules" ]; then
    echo "node_modules がありません。パッケージをインストールします。"
    npm install jsdom js-beautify json-beautify
fi
echo "どのフォルダ内部を作りますか？"
echo "html / json / favicon / all"
read -r -p ">>> " option
case "$option" in
    html)
        node html_generator.js
        ;;
    json)
        node json_generator.js
        ;;
    favicon)
        node favicon_generator.js
        ;;
    all)
        node html_generator.js
        node json_generator.js
        node favicon_generator.js
        ;;
    *)
        echo "無効な出力方式です。終了します。"
        exit 1
        ;;
esac
echo "ビルド完了！"