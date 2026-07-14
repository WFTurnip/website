#!/bin/bash

fontname=("sulive" "zosokw")

for fontname in "${fontname[@]}"; do
    echo "ディレクトリ${fontname}の異体大文字から異体小文字へのコピーをします。"
    # isolate form -------------------------------------------------
    cp "${fontname}"/uni0042.isol.svg "${fontname}"/uni0062.isol.svg
    cp "${fontname}"/uni0043.isol.svg "${fontname}"/uni0063.isol.svg
    cp "${fontname}"/uni0044.isol.svg "${fontname}"/uni0064.isol.svg
    cp "${fontname}"/uni0046.isol.svg "${fontname}"/uni0066.isol.svg
    cp "${fontname}"/uni0047.isol.svg "${fontname}"/uni0067.isol.svg
    cp "${fontname}"/uni0048.isol.svg "${fontname}"/uni0068.isol.svg
    cp "${fontname}"/uni004a.isol.svg "${fontname}"/uni006a.isol.svg
    cp "${fontname}"/uni004b.isol.svg "${fontname}"/uni006b.isol.svg
    cp "${fontname}"/uni004c.isol.svg "${fontname}"/uni006c.isol.svg
    cp "${fontname}"/uni004d.isol.svg "${fontname}"/uni006d.isol.svg
    cp "${fontname}"/uni004e.isol.svg "${fontname}"/uni006e.isol.svg
    cp "${fontname}"/uni0050.isol.svg "${fontname}"/uni0070.isol.svg
    cp "${fontname}"/uni0051.isol.svg "${fontname}"/uni0071.isol.svg
    cp "${fontname}"/uni0052.isol.svg "${fontname}"/uni0072.isol.svg
    cp "${fontname}"/uni0053.isol.svg "${fontname}"/uni0073.isol.svg
    cp "${fontname}"/uni0054.isol.svg "${fontname}"/uni0074.isol.svg
    cp "${fontname}"/uni0056.isol.svg "${fontname}"/uni0076.isol.svg
    cp "${fontname}"/uni0058.isol.svg "${fontname}"/uni0078.isol.svg
    cp "${fontname}"/uni0059.isol.svg "${fontname}"/uni0079.isol.svg
    cp "${fontname}"/uni005a.isol.svg "${fontname}"/uni007a.isol.svg
    # initial form -------------------------------------------------
    cp "${fontname}"/uni0042.init.svg "${fontname}"/uni0062.init.svg
    cp "${fontname}"/uni0043.init.svg "${fontname}"/uni0063.init.svg
    cp "${fontname}"/uni0044.init.svg "${fontname}"/uni0064.init.svg
    cp "${fontname}"/uni0046.init.svg "${fontname}"/uni0066.init.svg
    cp "${fontname}"/uni0047.init.svg "${fontname}"/uni0067.init.svg
    cp "${fontname}"/uni0048.init.svg "${fontname}"/uni0068.init.svg
    cp "${fontname}"/uni004a.init.svg "${fontname}"/uni006a.init.svg
    cp "${fontname}"/uni004b.init.svg "${fontname}"/uni006b.init.svg
    cp "${fontname}"/uni004c.init.svg "${fontname}"/uni006c.init.svg
    cp "${fontname}"/uni004d.init.svg "${fontname}"/uni006d.init.svg
    cp "${fontname}"/uni004e.init.svg "${fontname}"/uni006e.init.svg
    cp "${fontname}"/uni0050.init.svg "${fontname}"/uni0070.init.svg
    cp "${fontname}"/uni0051.init.svg "${fontname}"/uni0071.init.svg
    cp "${fontname}"/uni0052.init.svg "${fontname}"/uni0072.init.svg
    cp "${fontname}"/uni0053.init.svg "${fontname}"/uni0073.init.svg
    cp "${fontname}"/uni0054.init.svg "${fontname}"/uni0074.init.svg
    cp "${fontname}"/uni0056.init.svg "${fontname}"/uni0076.init.svg
    cp "${fontname}"/uni0058.init.svg "${fontname}"/uni0078.init.svg
    cp "${fontname}"/uni0059.init.svg "${fontname}"/uni0079.init.svg
    cp "${fontname}"/uni005a.init.svg "${fontname}"/uni007a.init.svg
    # medial form --------------------------------------------------
    cp "${fontname}"/uni0042.medi.svg "${fontname}"/uni0062.medi.svg
    cp "${fontname}"/uni0043.medi.svg "${fontname}"/uni0063.medi.svg
    cp "${fontname}"/uni0044.medi.svg "${fontname}"/uni0064.medi.svg
    cp "${fontname}"/uni0046.medi.svg "${fontname}"/uni0066.medi.svg
    cp "${fontname}"/uni0047.medi.svg "${fontname}"/uni0067.medi.svg
    cp "${fontname}"/uni0048.medi.svg "${fontname}"/uni0068.medi.svg
    cp "${fontname}"/uni004a.medi.svg "${fontname}"/uni006a.medi.svg
    cp "${fontname}"/uni004b.medi.svg "${fontname}"/uni006b.medi.svg
    cp "${fontname}"/uni004c.medi.svg "${fontname}"/uni006c.medi.svg
    cp "${fontname}"/uni004d.medi.svg "${fontname}"/uni006d.medi.svg
    cp "${fontname}"/uni004e.medi.svg "${fontname}"/uni006e.medi.svg
    cp "${fontname}"/uni0050.medi.svg "${fontname}"/uni0070.medi.svg
    cp "${fontname}"/uni0051.medi.svg "${fontname}"/uni0071.medi.svg
    cp "${fontname}"/uni0052.medi.svg "${fontname}"/uni0072.medi.svg
    cp "${fontname}"/uni0053.medi.svg "${fontname}"/uni0073.medi.svg
    cp "${fontname}"/uni0054.medi.svg "${fontname}"/uni0074.medi.svg
    cp "${fontname}"/uni0056.medi.svg "${fontname}"/uni0076.medi.svg
    cp "${fontname}"/uni0058.medi.svg "${fontname}"/uni0078.medi.svg
    cp "${fontname}"/uni0059.medi.svg "${fontname}"/uni0079.medi.svg
    cp "${fontname}"/uni005a.medi.svg "${fontname}"/uni007a.medi.svg
    # final form ---------------------------------------------------
    cp "${fontname}"/uni0042.fina.svg "${fontname}"/uni0062.fina.svg
    cp "${fontname}"/uni0043.fina.svg "${fontname}"/uni0063.fina.svg
    cp "${fontname}"/uni0044.fina.svg "${fontname}"/uni0064.fina.svg
    cp "${fontname}"/uni0046.fina.svg "${fontname}"/uni0066.fina.svg
    cp "${fontname}"/uni0047.fina.svg "${fontname}"/uni0067.fina.svg
    cp "${fontname}"/uni0048.fina.svg "${fontname}"/uni0068.fina.svg
    cp "${fontname}"/uni004a.fina.svg "${fontname}"/uni006a.fina.svg
    cp "${fontname}"/uni004b.fina.svg "${fontname}"/uni006b.fina.svg
    cp "${fontname}"/uni004c.fina.svg "${fontname}"/uni006c.fina.svg
    cp "${fontname}"/uni004d.fina.svg "${fontname}"/uni006d.fina.svg
    cp "${fontname}"/uni004e.fina.svg "${fontname}"/uni006e.fina.svg
    cp "${fontname}"/uni0050.fina.svg "${fontname}"/uni0070.fina.svg
    cp "${fontname}"/uni0051.fina.svg "${fontname}"/uni0071.fina.svg
    cp "${fontname}"/uni0052.fina.svg "${fontname}"/uni0072.fina.svg
    cp "${fontname}"/uni0053.fina.svg "${fontname}"/uni0073.fina.svg
    cp "${fontname}"/uni0054.fina.svg "${fontname}"/uni0074.fina.svg
    cp "${fontname}"/uni0056.fina.svg "${fontname}"/uni0076.fina.svg
    cp "${fontname}"/uni0058.fina.svg "${fontname}"/uni0078.fina.svg
    cp "${fontname}"/uni0059.fina.svg "${fontname}"/uni0079.fina.svg
    cp "${fontname}"/uni005a.fina.svg "${fontname}"/uni007a.fina.svg
    if [ "$fontname" == "sulive" ]; then
        # second medial form -------------------------------------------
        cp "${fontname}"/uni0042.med2.svg "${fontname}"/uni0062.med2.svg
        cp "${fontname}"/uni0043.med2.svg "${fontname}"/uni0063.med2.svg
        cp "${fontname}"/uni0044.med2.svg "${fontname}"/uni0064.med2.svg
        cp "${fontname}"/uni0046.med2.svg "${fontname}"/uni0066.med2.svg
        cp "${fontname}"/uni0047.med2.svg "${fontname}"/uni0067.med2.svg
        cp "${fontname}"/uni0048.med2.svg "${fontname}"/uni0068.med2.svg
        cp "${fontname}"/uni004a.med2.svg "${fontname}"/uni006a.med2.svg
        cp "${fontname}"/uni004b.med2.svg "${fontname}"/uni006b.med2.svg
        cp "${fontname}"/uni004c.med2.svg "${fontname}"/uni006c.med2.svg
        cp "${fontname}"/uni004d.med2.svg "${fontname}"/uni006d.med2.svg
        cp "${fontname}"/uni004e.med2.svg "${fontname}"/uni006e.med2.svg
        cp "${fontname}"/uni0050.med2.svg "${fontname}"/uni0070.med2.svg
        cp "${fontname}"/uni0051.med2.svg "${fontname}"/uni0071.med2.svg
        cp "${fontname}"/uni0052.med2.svg "${fontname}"/uni0072.med2.svg
        cp "${fontname}"/uni0053.med2.svg "${fontname}"/uni0073.med2.svg
        cp "${fontname}"/uni0054.med2.svg "${fontname}"/uni0074.med2.svg
        cp "${fontname}"/uni0056.med2.svg "${fontname}"/uni0076.med2.svg
        cp "${fontname}"/uni0058.med2.svg "${fontname}"/uni0078.med2.svg
        cp "${fontname}"/uni0059.med2.svg "${fontname}"/uni0079.med2.svg
        cp "${fontname}"/uni005a.med2.svg "${fontname}"/uni007a.med2.svg
        # second final form --------------------------------------------
        cp "${fontname}"/uni0042.fin2.svg "${fontname}"/uni0062.fin2.svg
        cp "${fontname}"/uni0043.fin2.svg "${fontname}"/uni0063.fin2.svg
        cp "${fontname}"/uni0044.fin2.svg "${fontname}"/uni0064.fin2.svg
        cp "${fontname}"/uni0046.fin2.svg "${fontname}"/uni0066.fin2.svg
        cp "${fontname}"/uni0047.fin2.svg "${fontname}"/uni0067.fin2.svg
        cp "${fontname}"/uni0048.fin2.svg "${fontname}"/uni0068.fin2.svg
        cp "${fontname}"/uni004a.fin2.svg "${fontname}"/uni006a.fin2.svg
        cp "${fontname}"/uni004b.fin2.svg "${fontname}"/uni006b.fin2.svg
        cp "${fontname}"/uni004c.fin2.svg "${fontname}"/uni006c.fin2.svg
        cp "${fontname}"/uni004d.fin2.svg "${fontname}"/uni006d.fin2.svg
        cp "${fontname}"/uni004e.fin2.svg "${fontname}"/uni006e.fin2.svg
        cp "${fontname}"/uni0050.fin2.svg "${fontname}"/uni0070.fin2.svg
        cp "${fontname}"/uni0051.fin2.svg "${fontname}"/uni0071.fin2.svg
        cp "${fontname}"/uni0052.fin2.svg "${fontname}"/uni0072.fin2.svg
        cp "${fontname}"/uni0053.fin2.svg "${fontname}"/uni0073.fin2.svg
        cp "${fontname}"/uni0054.fin2.svg "${fontname}"/uni0074.fin2.svg
        cp "${fontname}"/uni0056.fin2.svg "${fontname}"/uni0076.fin2.svg
        cp "${fontname}"/uni0058.fin2.svg "${fontname}"/uni0078.fin2.svg
        cp "${fontname}"/uni0059.fin2.svg "${fontname}"/uni0079.fin2.svg
        cp "${fontname}"/uni005a.fin2.svg "${fontname}"/uni007a.fin2.svg
    fi
    echo "ディレクトリ${fontname}の異体大文字から異体小文字へのコピーが完了しました。"
done
