#!/bin/bash
echo "フォント情報生成スクリプトへようこそ。"
echo "以下のオプションから選択してください"
echo "1. each - 個別のフォントファイルを指定して情報生成"
echo "2. all  - ディレクトリ内のすべてのフォントファイルを情報生成"
echo "オプションを入力してください（each / all）"
read -p ">>> " option
case $option in
each)
    echo "情報を出力するフォントのファイル名を入力してください。"
    ls -d *.sfd
    read -p ">>> " fontname
    fontforge -script generate.ff "${fontname}"
    echo "${fontname}のフォント情報出力が完了しました。"
    ;;
all)
    for fontfile in *.sfd; do
        fontforge -script generate.ff "${fontfile}"
        echo "${fontfile}のフォント情報出力が完了しました。"
    done
    ;;
*)
    echo "無効なオプションです。eachまたはallを入力してください。"
    ;;
esac
