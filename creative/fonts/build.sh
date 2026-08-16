#!/bin/bash
echo "フォントビルドスクリプトへようこそ。"
echo "======================================"
echo "以下のオプションから選択してください。"
echo "1. each - 個別のフォントファイルを指定してビルド"
echo "2. all  - ディレクトリ内のすべてのフォントファイルをビルド"
echo "オプションをプロンプトへ入力してください。 ( each / all )"
read -p ">>> " option
fontnames=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
case $option in
    each)
        echo "======================================"
        echo "フォントをビルドするためのフォント名を入力してください。"
        echo "一覧"
        for fontname in "${fontnames[@]}"; do
            echo "${fontname}"
        done
        read -p ">>> " fontname
        echo "${fontname}をビルドします。"
        fontforge -script ${fontname}.ff ${fontname}.sfd
        echo "${fontname}のビルドが完了しました。"
        ;;
    all)
        for fontname in "${fontnames[@]}"; do
            echo "======================================"
            echo "${fontname}をビルドします。"
            fontforge -script ${fontname}.ff ${fontname}.sfd
            echo "${fontname}のビルドが完了しました。"
        done
        ;;
    *)
        echo "無効なオプションです。eachまたはallを入力してください。"
        ;;
esac
echo "======================================"
echo "フォントビルドスクリプト実行完了致しました。ご苦労様でした。"
