#!/bin/bash
echo "HTMLをLaTeXに変換します。"
pandoc -f html -t latex -s -o pdf_dictionary/grammar/reference.tex dictionary/grammar/reference.html --toc --pdf-engine=latexmk --pdf-engine-opt="-r" --pdf-engine-opt="./htmltolatex.latexmk"
pandoc -f html -t latex -s -o pdf_dictionary/cantillation/reference.tex dictionary/cantillation/reference.html --toc --pdf-engine=latexmk --pdf-engine-opt="-r" --pdf-engine-opt="./htmltolatex.latexmk"
echo "HTMLをLaTeXに変換しました。"
