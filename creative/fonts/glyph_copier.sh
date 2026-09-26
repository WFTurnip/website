#!/bin/bash
fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の基本大文字から基本小文字へのコピーをします。"
    cp "${dirname}"/uni0041.svg "${dirname}"/uni0061.svg # COPY A a
    cp "${dirname}"/uni0042.svg "${dirname}"/uni0062.svg # COPY B b
    cp "${dirname}"/uni0043.svg "${dirname}"/uni0063.svg # COPY C c
    cp "${dirname}"/uni0044.svg "${dirname}"/uni0064.svg # COPY D d
    cp "${dirname}"/uni0045.svg "${dirname}"/uni0065.svg # COPY E e
    cp "${dirname}"/uni0046.svg "${dirname}"/uni0066.svg # COPY F f
    cp "${dirname}"/uni0047.svg "${dirname}"/uni0067.svg # COPY G g
    cp "${dirname}"/uni0048.svg "${dirname}"/uni0068.svg # COPY H h
    cp "${dirname}"/uni0049.svg "${dirname}"/uni0069.svg # COPY I i
    cp "${dirname}"/uni004a.svg "${dirname}"/uni006a.svg # COPY J j
    cp "${dirname}"/uni004b.svg "${dirname}"/uni006b.svg # COPY K k
    cp "${dirname}"/uni004c.svg "${dirname}"/uni006c.svg # COPY L l
    cp "${dirname}"/uni004d.svg "${dirname}"/uni006d.svg # COPY M m
    cp "${dirname}"/uni004e.svg "${dirname}"/uni006e.svg # COPY N n
    cp "${dirname}"/uni004f.svg "${dirname}"/uni006f.svg # COPY O o
    cp "${dirname}"/uni0050.svg "${dirname}"/uni0070.svg # COPY P p
    cp "${dirname}"/uni0051.svg "${dirname}"/uni0071.svg # COPY Q q
    cp "${dirname}"/uni0052.svg "${dirname}"/uni0072.svg # COPY R r
    cp "${dirname}"/uni0053.svg "${dirname}"/uni0073.svg # COPY S s
    cp "${dirname}"/uni0054.svg "${dirname}"/uni0074.svg # COPY T t
    cp "${dirname}"/uni0055.svg "${dirname}"/uni0075.svg # COPY U u
    cp "${dirname}"/uni0056.svg "${dirname}"/uni0076.svg # COPY V v
    cp "${dirname}"/uni0057.svg "${dirname}"/uni0077.svg # COPY W w
    cp "${dirname}"/uni0058.svg "${dirname}"/uni0078.svg # COPY X x
    cp "${dirname}"/uni0059.svg "${dirname}"/uni0079.svg # COPY Y y
    cp "${dirname}"/uni005a.svg "${dirname}"/uni007a.svg # COPY Z z
    echo "ディレクトリ${dirname}の基本大文字から基本小文字へのコピーが完了しました。"
done
