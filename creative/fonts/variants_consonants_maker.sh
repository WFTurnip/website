#!/bin/bash
fontname=("sulive" "zosokw")
for dirname in "${fontname[@]}"; do
    echo "ディレクトリ${dirname}の異体文字のタイムスタンプを更新します。"
    # ISOLATE FORM -----------------------------
    touch "${dirname}"/uni004b.isol.svg # K.ISOL
    touch "${dirname}"/uni0054.isol.svg # T.ISOL
    touch "${dirname}"/uni0053.isol.svg # S.ISOL
    touch "${dirname}"/uni0051.isol.svg # Q.ISOL
    touch "${dirname}"/uni0052.isol.svg # R.ISOL
    touch "${dirname}"/uni0050.isol.svg # P.ISOL
    touch "${dirname}"/uni0048.isol.svg # H.ISOL
    touch "${dirname}"/uni0046.isol.svg # F.ISOL
    touch "${dirname}"/uni004d.isol.svg # M.ISOL
    # INITIAL FORM -----------------------------
    touch "${dirname}"/uni004b.init.svg # K.INIT
    touch "${dirname}"/uni0054.init.svg # T.INIT
    touch "${dirname}"/uni0053.init.svg # S.INIT
    touch "${dirname}"/uni0051.init.svg # Q.INIT
    touch "${dirname}"/uni0052.init.svg # R.INIT
    touch "${dirname}"/uni0050.init.svg # P.INIT
    touch "${dirname}"/uni0048.init.svg # H.INIT
    touch "${dirname}"/uni0046.init.svg # F.INIT
    touch "${dirname}"/uni004d.init.svg # M.INIT
    # MEDIAL FORM ------------------------------
    touch "${dirname}"/uni004b.medi.svg # K.MEDI
    touch "${dirname}"/uni0054.medi.svg # T.MEDI
    touch "${dirname}"/uni0053.medi.svg # S.MEDI
    touch "${dirname}"/uni0051.medi.svg # Q.MEDI
    touch "${dirname}"/uni0052.medi.svg # R.MEDI
    touch "${dirname}"/uni0050.medi.svg # P.MEDI
    touch "${dirname}"/uni0048.medi.svg # H.MEDI
    touch "${dirname}"/uni0046.medi.svg # F.MEDI
    touch "${dirname}"/uni004d.medi.svg # M.MEDI
    # MEDIAL SECOND FORM -----------------------
    touch "${dirname}"/uni004b.med2.svg # K.MED2
    touch "${dirname}"/uni0054.med2.svg # T.MED2
    touch "${dirname}"/uni0053.med2.svg # S.MED2
    touch "${dirname}"/uni0051.med2.svg # Q.MED2
    touch "${dirname}"/uni0052.med2.svg # R.MED2
    touch "${dirname}"/uni0050.med2.svg # P.MED2
    touch "${dirname}"/uni0048.med2.svg # H.MED2
    touch "${dirname}"/uni0046.med2.svg # F.MED2
    touch "${dirname}"/uni004d.med2.svg # M.MED2
    # FINAL FORM -------------------------------
    touch "${dirname}"/uni004b.fina.svg # K.FINA
    touch "${dirname}"/uni0054.fina.svg # T.FINA
    touch "${dirname}"/uni0053.fina.svg # S.FINA
    touch "${dirname}"/uni0051.fina.svg # Q.FINA
    touch "${dirname}"/uni0052.fina.svg # R.FINA
    touch "${dirname}"/uni0050.fina.svg # P.FINA
    touch "${dirname}"/uni0048.fina.svg # H.FINA
    touch "${dirname}"/uni0046.fina.svg # F.FINA
    touch "${dirname}"/uni004d.fina.svg # M.FINA
    # FINAL SECOND FORM ------------------------
    touch "${dirname}"/uni004b.fin2.svg # K.FIN2
    touch "${dirname}"/uni0054.fin2.svg # T.FIN2
    touch "${dirname}"/uni0053.fin2.svg # S.FIN2
    touch "${dirname}"/uni0051.fin2.svg # Q.FIN2
    touch "${dirname}"/uni0052.fin2.svg # R.FIN2
    touch "${dirname}"/uni0050.fin2.svg # P.FIN2
    touch "${dirname}"/uni0048.fin2.svg # H.FIN2
    touch "${dirname}"/uni0046.fin2.svg # F.FIN2
    touch "${dirname}"/uni004d.fin2.svg # M.FIN2
    echo "ディレクトリ${dirname}の異体文字のタイムスタンプを更新しました。"
done
