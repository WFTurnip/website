#!/bin/bash

echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

# isolate form ---------------------
touch "${fontname}"/uni004b.isol.svg
touch "${fontname}"/uni0054.isol.svg
touch "${fontname}"/uni0053.isol.svg
touch "${fontname}"/uni0051.isol.svg
touch "${fontname}"/uni0052.isol.svg
touch "${fontname}"/uni0050.isol.svg
touch "${fontname}"/uni0048.isol.svg
touch "${fontname}"/uni0046.isol.svg
touch "${fontname}"/uni004d.isol.svg
# initial form ---------------------
touch "${fontname}"/uni004b.init.svg
touch "${fontname}"/uni0054.init.svg
touch "${fontname}"/uni0053.init.svg
touch "${fontname}"/uni0051.init.svg
touch "${fontname}"/uni0052.init.svg
touch "${fontname}"/uni0050.init.svg
touch "${fontname}"/uni0048.init.svg
touch "${fontname}"/uni0046.init.svg
touch "${fontname}"/uni004d.init.svg
# medial form ----------------------
touch "${fontname}"/uni004b.medi.svg
touch "${fontname}"/uni0054.medi.svg
touch "${fontname}"/uni0053.medi.svg
touch "${fontname}"/uni0051.medi.svg
touch "${fontname}"/uni0052.medi.svg
touch "${fontname}"/uni0050.medi.svg
touch "${fontname}"/uni0048.medi.svg
touch "${fontname}"/uni0046.medi.svg
touch "${fontname}"/uni004d.medi.svg
# final form -----------------------
touch "${fontname}"/uni004b.fina.svg
touch "${fontname}"/uni0054.fina.svg
touch "${fontname}"/uni0053.fina.svg
touch "${fontname}"/uni0051.fina.svg
touch "${fontname}"/uni0052.fina.svg
touch "${fontname}"/uni0050.fina.svg
touch "${fontname}"/uni0048.fina.svg
touch "${fontname}"/uni0046.fina.svg
touch "${fontname}"/uni004d.fina.svg
if [ "$fontname" == "sulive" ]; then
    # second medial form ---------------
    touch "${fontname}"/uni004b.med2.svg
    touch "${fontname}"/uni0054.med2.svg
    touch "${fontname}"/uni0053.med2.svg
    touch "${fontname}"/uni0051.med2.svg
    touch "${fontname}"/uni0052.med2.svg
    touch "${fontname}"/uni0050.med2.svg
    touch "${fontname}"/uni0048.med2.svg
    touch "${fontname}"/uni0046.med2.svg
    touch "${fontname}"/uni004d.med2.svg
    # second final form ----------------
    touch "${fontname}"/uni004b.fin2.svg
    touch "${fontname}"/uni0054.fin2.svg
    touch "${fontname}"/uni0053.fin2.svg
    touch "${fontname}"/uni0051.fin2.svg
    touch "${fontname}"/uni0052.fin2.svg
    touch "${fontname}"/uni0050.fin2.svg
    touch "${fontname}"/uni0048.fin2.svg
    touch "${fontname}"/uni0046.fin2.svg
    touch "${fontname}"/uni004d.fin2.svg
fi
