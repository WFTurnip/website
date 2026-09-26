#!/bin/bash
echo "sulive/"
echo "zosokw/"
echo "結合するフォントのディレクトリ名を入力してください。"
read -p ">>> " dirname
# ISOLATE FORM ------------------------------------------------------------------------------------------------------------------------------------
cat "${dirname}"/uni004b.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.isol.svg                          # CONCATENATE K.ISOL \ >G.ISOL
cat "${dirname}"/uni0054.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.isol.svg                          # CONCATENATE T.ISOL \ >D.ISOL
cat "${dirname}"/uni0053.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.isol.svg                          # CONCATENATE S.ISOL \ >Z.ISOL
cat "${dirname}"/uni0051.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.isol.svg                          # CONCATENATE Q.ISOL \ >C.ISOL
cat "${dirname}"/uni0052.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.isol.svg                          # CONCATENATE R.ISOL \ >L.ISOL
cat "${dirname}"/uni0050.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.isol.svg                          # CONCATENATE P.ISOL \ >B.ISOL
cat "${dirname}"/uni0048.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.isol.svg                          # CONCATENATE H.ISOL \ >X.ISOL
cat "${dirname}"/uni0046.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.isol.svg                          # CONCATENATE F.ISOL \ >V.ISOL
cat "${dirname}"/uni004d.isol.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.isol.svg                          # CONCATENATE M.ISOL \ >N.ISOL
cat "${dirname}"/uni0053.isol.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.isol.svg # CONCATENATE S.ISOL \ 0 >J.ISOL
cat "${dirname}"/uni0051.isol.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.isol.svg # CONCATENATE Q.ISOL \ 0 >Y.ISOL
# INITIAL FORM ------------------------------------------------------------------------------------------------------------------------------------
cat "${dirname}"/uni004b.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.init.svg                          # CONCATENATE K.INIT \ >G.INIT
cat "${dirname}"/uni0054.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.init.svg                          # CONCATENATE T.INIT \ >D.INIT
cat "${dirname}"/uni0053.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.init.svg                          # CONCATENATE S.INIT \ >Z.INIT
cat "${dirname}"/uni0051.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.init.svg                          # CONCATENATE Q.INIT \ >C.INIT
cat "${dirname}"/uni0052.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.init.svg                          # CONCATENATE R.INIT \ >L.INIT
cat "${dirname}"/uni0050.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.init.svg                          # CONCATENATE P.INIT \ >B.INIT
cat "${dirname}"/uni0048.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.init.svg                          # CONCATENATE H.INIT \ >X.INIT
cat "${dirname}"/uni0046.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.init.svg                          # CONCATENATE F.INIT \ >V.INIT
cat "${dirname}"/uni004d.init.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.init.svg                          # CONCATENATE M.INIT \ >N.INIT
cat "${dirname}"/uni0053.init.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.init.svg # CONCATENATE S.INIT \ 0 >J.INIT
cat "${dirname}"/uni0051.init.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.init.svg # CONCATENATE Q.INIT \ 0 >Y.INIT
# MEDIAL FORM -------------------------------------------------------------------------------------------------------------------------------------
cat "${dirname}"/uni004b.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.medi.svg                          # CONCATENATE K.MEDI \ >G.MEDI
cat "${dirname}"/uni0054.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.medi.svg                          # CONCATENATE T.MEDI \ >D.MEDI
cat "${dirname}"/uni0053.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.medi.svg                          # CONCATENATE S.MEDI \ >Z.MEDI
cat "${dirname}"/uni0051.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.medi.svg                          # CONCATENATE Q.MEDI \ >C.MEDI
cat "${dirname}"/uni0052.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.medi.svg                          # CONCATENATE R.MEDI \ >L.MEDI
cat "${dirname}"/uni0050.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.medi.svg                          # CONCATENATE P.MEDI \ >B.MEDI
cat "${dirname}"/uni0048.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.medi.svg                          # CONCATENATE H.MEDI \ >X.MEDI
cat "${dirname}"/uni0046.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.medi.svg                          # CONCATENATE F.MEDI \ >V.MEDI
cat "${dirname}"/uni004d.medi.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.medi.svg                          # CONCATENATE M.MEDI \ >N.MEDI
cat "${dirname}"/uni0053.medi.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.medi.svg # CONCATENATE S.MEDI \ 0 >J.MEDI
cat "${dirname}"/uni0051.medi.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.medi.svg # CONCATENATE Q.MEDI \ 0 >Y.MEDI
# SECOND MEDIAL FORM ------------------------------------------------------------------------------------------------------------------------------
cat "${dirname}"/uni004b.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.med2.svg                          # CONCATENATE K.MED2 \ >G.MED2
cat "${dirname}"/uni0054.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.med2.svg                          # CONCATENATE T.MED2 \ >D.MED2
cat "${dirname}"/uni0053.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.med2.svg                          # CONCATENATE S.MED2 \ >Z.MED2
cat "${dirname}"/uni0051.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.med2.svg                          # CONCATENATE Q.MED2 \ >C.MED2
cat "${dirname}"/uni0052.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.med2.svg                          # CONCATENATE R.MED2 \ >L.MED2
cat "${dirname}"/uni0050.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.med2.svg                          # CONCATENATE P.MED2 \ >B.MED2
cat "${dirname}"/uni0048.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.med2.svg                          # CONCATENATE H.MED2 \ >X.MED2
cat "${dirname}"/uni0046.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.med2.svg                          # CONCATENATE F.MED2 \ >V.MED2
cat "${dirname}"/uni004d.med2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.med2.svg                          # CONCATENATE M.MED2 \ >N.MED2
cat "${dirname}"/uni0053.med2.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.med2.svg # CONCATENATE S.MED2 \ 0 >J.MED2
cat "${dirname}"/uni0051.med2.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.med2.svg # CONCATENATE Q.MED2 \ 0 >Y.MED2
# FINAL FORM --------------------------------------------------------------------------------------------------------------------------------------
cat "${dirname}"/uni004b.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.fina.svg                          # CONCATENATE K.FINA \ >G.FINA
cat "${dirname}"/uni0054.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.fina.svg                          # CONCATENATE T.FINA \ >D.FINA
cat "${dirname}"/uni0053.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.fina.svg                          # CONCATENATE S.FINA \ >Z.FINA
cat "${dirname}"/uni0051.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.fina.svg                          # CONCATENATE Q.FINA \ >C.FINA
cat "${dirname}"/uni0052.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.fina.svg                          # CONCATENATE R.FINA \ >L.FINA
cat "${dirname}"/uni0050.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.fina.svg                          # CONCATENATE P.FINA \ >B.FINA
cat "${dirname}"/uni0048.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.fina.svg                          # CONCATENATE H.FINA \ >X.FINA
cat "${dirname}"/uni0046.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.fina.svg                          # CONCATENATE F.FINA \ >V.FINA
cat "${dirname}"/uni004d.fina.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.fina.svg                          # CONCATENATE M.FINA \ >N.FINA
cat "${dirname}"/uni0053.fina.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.fina.svg # CONCATENATE S.FINA \ 0 >J.FINA
cat "${dirname}"/uni0051.fina.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.fina.svg # CONCATENATE Q.FINA \ 0 >Y.FINA
# SECOND FINAL FORM -------------------------------------------------------------------------------------------------------------------------------
cat "${dirname}"/uni004b.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0047.fin2.svg                          # CONCATENATE K.FIN2 \ >G.FIN2
cat "${dirname}"/uni0054.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0044.fin2.svg                          # CONCATENATE T.FIN2 \ >D.FIN2
cat "${dirname}"/uni0053.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni005a.fin2.svg                          # CONCATENATE S.FIN2 \ >Z.FIN2
cat "${dirname}"/uni0051.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0043.fin2.svg                          # CONCATENATE Q.FIN2 \ >C.FIN2
cat "${dirname}"/uni0052.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004c.fin2.svg                          # CONCATENATE R.FIN2 \ >L.FIN2
cat "${dirname}"/uni0050.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0042.fin2.svg                          # CONCATENATE P.FIN2 \ >B.FIN2
cat "${dirname}"/uni0048.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0058.fin2.svg                          # CONCATENATE H.FIN2 \ >X.FIN2
cat "${dirname}"/uni0046.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni0056.fin2.svg                          # CONCATENATE F.FIN2 \ >V.FIN2
cat "${dirname}"/uni004d.fin2.svg "${dirname}"/uni005c.svg >"${dirname}"/uni004e.fin2.svg                          # CONCATENATE M.FIN2 \ >N.FIN2
cat "${dirname}"/uni0053.fin2.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni004a.fin2.svg # CONCATENATE S.FIN2 \ 0 >J.FIN2
cat "${dirname}"/uni0051.fin2.svg "${dirname}"/uni005c.svg "${dirname}"/uni0030.svg >"${dirname}"/uni0059.fin2.svg # CONCATENATE Q.FIN2 \ 0 >Y.FIN2
