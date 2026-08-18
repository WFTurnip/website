#!/bin/bash
echo "フォント情報生成スクリプトへようこそ。"
echo "======================================"
echo "以下のオプションから選択してください。"
echo "1. each - 個別のフォントファイルを指定して情報生成"
echo "2. all  - ディレクトリ内のすべてのフォントファイルを情報生成"
echo "オプションをプロンプトへ入力してください。 ( each / all )"
read -p ">>> " option
case $option in
    each)
        echo "======================================"
        echo "フォント情報を出力するためのファイル名を入力してください。"
        ls -d *.sfd
        read -p ">>> " fontname
        echo "${fontfile}のフォント情報を出力します。"
        fontforge -script information.ff "${fontname}"
        echo "${fontname}のフォント情報出力が完了しました。"
        ;;
    all)
        for fontfile in *.sfd; do
            echo "======================================"
            echo "${fontfile}のフォント情報を出力します。"
            fontforge -script information.ff "${fontfile}"
            echo "${fontfile}のフォント情報出力が完了しました。"
        done
        ;;
    *)
        echo "無効なオプションです。eachまたはallを入力してください。"
        ;;
esac
echo "======================================"
echo "フォント情報生成スクリプト実行完了致しました。ご苦労様でした。"