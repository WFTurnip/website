const fs = require("fs").promises;
const path = require("path");
const {JSDOM} = require("jsdom");
const beautify = require("js-beautify").html;
const consonantArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const vowelArray = ["a", "e", "i", "o", "u", "w"];
const vowelCaseArray = ["否", "与", "属", "対", "主", "流"];
const vowelPartOfSpeechTypeArray = ["附", "動", "容", "助", "副", "名"];
const vowelPronunciationArray = ["a", "e", "i", "o", "u", ""];

const upperTongueConsonantArray = ["k", "g", "t", "d", "s", "z"];
const middleTongueConsonantArray = ["q", "c", "r", "l", "p", "b"];
const lowerTongueConsonantArray = ["h", "x", "f", "v", "m", "n"];

const upperTongueConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神"];
const middleTongueConceptArray = ["空白", "物質", "過去", "未来", "鎮静", "高揚"];
const lowerTongueConceptArray = ["受動", "能動", "創造", "破壊", "流動", "固定"];
/**
 * `index`HTMLファイルを生成する関数
 * `index`ファイルには、子ディレクトリである子HTMLファイルへのリンクが含まれる
 */
async function generateIndex() {
    let filename = path.join("html_index", "index.html");
    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;
    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
    let metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaViewport);
    let title = document.createElement("title");
    title.textContent = "子音総一覧";
    head.appendChild(title);
    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../style/index.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "../style/navigator.css";
    head.appendChild(link4);
    let link5 = document.createElement("link");
    link5.rel = "icon";
    link5.href = "../favicon_index" + "/index" + ".svg";
    head.appendChild(link5);
    let body = document.body;
    let header = document.createElement("header");
    let headerOl = document.createElement("ol");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerOl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    headerLi2.textContent = "子音総一覧";
    headerOl.appendChild(headerLi2);
    header.appendChild(headerOl);
    body.appendChild(header);
    let main = document.createElement("main");
    let h1 = document.createElement("h1");
    h1.textContent = "子音総一覧";
    main.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index" + "/index" + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    article.appendChild(figure);
    main.appendChild(article);
    let dl = document.createElement("dl");
    for (let firstConsonant = 0; firstConsonant < consonantArray.length; firstConsonant++) {
        let dt = document.createElement("dt");
        dt.id = consonantArray[firstConsonant];
        let consonant = document.createElement("b");
        let a = document.createElement("a");
        a.classList.add("xesada");
        a.href = consonantArray[firstConsonant] + ".html";
        a.textContent = consonantArray[firstConsonant];
        consonant.appendChild(a);
        dt.appendChild(consonant);
        dl.appendChild(dt);
        let dd = document.createElement("dd");
        dd.textContent = consonantConceptArray[firstConsonant];
        dl.appendChild(dd);
        main.appendChild(dl);
    }
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerOl = document.createElement("ol");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerOl.append(footerLi1);
    let footerLi2 = document.createElement("li");
    footerLi2.textContent = "子音総一覧";
    footerOl.appendChild(footerLi2);
    footer.appendChild(footerOl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * 子音を頭字とする語根の一覧を生成する関数
 * @param {Number} firstConsonant 第一子音
 */
async function generateConsonant(firstConsonant) {
    let filename = path.join("html_index", consonantArray[firstConsonant] + ".html");
    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;
    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
    let metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaViewport);
    let title = document.createElement("title");
    title.textContent = consonantArray[firstConsonant].toUpperCase() + "を頭字とする語根の一覧";
    head.appendChild(title);
    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../style/index.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "../style/navigator.css";
    head.appendChild(link4);
    let link5 = document.createElement("link");
    link5.rel = "icon";
    link5.href = "../favicon_index" + "/" + consonantArray[firstConsonant] + ".svg";
    head.appendChild(link5);
    let body = document.body;
    let header = document.createElement("header");
    let headerOl = document.createElement("ol");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerOl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    let headerA2 = document.createElement("a");
    headerA2.href = "index.html";
    headerA2.textContent = "子音総一覧";
    headerLi2.appendChild(headerA2);
    headerOl.appendChild(headerLi2);
    let headerLi3 = document.createElement("li");
    let headerSpan = document.createElement("span");
    headerSpan.classList.add("xesada");
    headerSpan.textContent = consonantArray[firstConsonant];
    headerLi3.append(headerSpan, "を頭字とする語根の一覧");
    headerOl.appendChild(headerLi3);
    header.appendChild(headerOl);
    body.appendChild(header);
    let main = document.createElement("main");
    let h1 = document.createElement("h1");
    let h1Span = document.createElement("span");
    h1Span.classList.add("xesada");
    h1Span.textContent = consonantArray[firstConsonant];
    h1.append(h1Span, "を頭字とする語根の一覧");
    main.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index/" + consonantArray[firstConsonant] + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    article.appendChild(figure);
    main.appendChild(article);
    let article2 = document.createElement("article");
    let p = document.createElement("p");
    let b = document.createElement("b");
    b.textContent = consonantConceptArray[firstConsonant];
    b.classList.add("concept");
    p.append("この子音は", b, "の概念を表す。");
    article2.appendChild(p);
    main.appendChild(article2);
    let dl = document.createElement("dl");
    for (let secondConsonant = 0; secondConsonant < consonantArray.length; secondConsonant++) {
        for (let thirdConsonant = 0; thirdConsonant < consonantArray.length; thirdConsonant++) {
            let dt = document.createElement("dt");
            dt.id = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
            let root = document.createElement("b");
            let a = document.createElement("a");
            a.classList.add("xesada");
            a.href = consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".html";
            a.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
            root.appendChild(a);
            dt.appendChild(root);
            dl.appendChild(dt);
            let dd = document.createElement("dd");
            dd.textContent = consonantConceptArray[firstConsonant] + consonantConceptArray[secondConsonant] + consonantConceptArray[thirdConsonant];
            dl.appendChild(dd);
        }
    }
    main.appendChild(dl);
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerOl = document.createElement("ol");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerOl.appendChild(footerLi1);
    let footerLi2 = document.createElement("li");
    let footerA2 = document.createElement("a");
    footerA2.href = "index.html";
    footerA2.textContent = "子音総一覧";
    footerLi2.appendChild(footerA2);
    footerOl.appendChild(footerLi2);
    let footerLi3 = document.createElement("li");
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("xesada");
    footerSpan.textContent = consonantArray[firstConsonant];
    footerLi3.append(footerSpan, "を頭字とする語根の一覧");
    footerOl.appendChild(footerLi3);
    footer.appendChild(footerOl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * 子HTMLファイルを生成する関数
 * @param {Number} firstConsonant 第一子音
 */
async function generateConsonantDirectory(firstConsonant) {
    let directoryName = path.join("html_index", consonantArray[firstConsonant]);
    try {
        await fs.mkdir(directoryName, {recursive: true});
        console.log("ディレクトリ" + directoryName + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directoryName + "を作成できませんでした。", error);
    }
}
/**
 * 子HTMLファイルを生成する関数
 * @param {Number} firstConsonant 第一子音
 * @param {Number} secondConsonant 第二子音
 * @param {Number} thirdConsonant 第三子音
 */
async function generateRoot(firstConsonant, secondConsonant, thirdConsonant) {
    let filename = path.join("html_index", consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".html");
    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;
    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
    let metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaViewport);
    let title = document.createElement("title");
    title.textContent = consonantArray[firstConsonant].toUpperCase() + consonantArray[secondConsonant].toUpperCase() + consonantArray[thirdConsonant].toUpperCase() + "を語根とする単語の一覧";
    head.appendChild(title);
    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../../style/index.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "../../style/navigator.css";
    head.appendChild(link4);
    let link5 = document.createElement("link");
    link5.rel = "stylesheet";
    link5.href = "../../style/table.css";
    head.appendChild(link5);
    let link6 = document.createElement("link");
    link6.rel = "icon";
    link6.href = "../../favicon_index/" + consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".svg";
    head.appendChild(link6);
    let script1 = document.createElement("script");
    script1.src = "../../fetch_details.js";
    head.appendChild(script1);
    let body = document.body;
    let header = document.createElement("header");
    let headerOl = document.createElement("ol");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerOl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    let headerA2 = document.createElement("a");
    headerA2.href = "../index.html";
    headerA2.textContent = "子音総一覧";
    headerLi2.appendChild(headerA2);
    headerOl.appendChild(headerLi2);
    let headerLi3 = document.createElement("li");
    let headerA3 = document.createElement("a");
    headerA3.href = "../" + consonantArray[firstConsonant] + ".html";
    let headerSpan1 = document.createElement("span");
    headerSpan1.classList.add("xesada");
    headerSpan1.textContent = consonantArray[firstConsonant];
    headerA3.append(headerSpan1, "を頭字とする語根の一覧");
    headerLi3.appendChild(headerA3);
    headerOl.appendChild(headerLi3);
    let headerLi4 = document.createElement("li");
    let headerSpan2 = document.createElement("span");
    headerSpan2.classList.add("xesada");
    headerSpan2.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
    headerLi4.append(headerSpan2, "を語根とする単語の一覧");
    headerOl.appendChild(headerLi4);
    header.appendChild(headerOl);
    body.appendChild(header);
    let main = document.createElement("main");
    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.classList.add("xesada");
    span1.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
    h1.append(span1, "を語根とする単語の一覧");
    main.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../../favicon_index/" + consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    article.appendChild(figure);
    main.appendChild(article);
    let article2 = document.createElement("article");
    let p = document.createElement("p");
    let b = document.createElement("b");
    b.textContent = consonantConceptArray[firstConsonant] + consonantConceptArray[secondConsonant] + consonantConceptArray[thirdConsonant];
    b.classList.add("concept");
    p.append("この語根は", b, "の概念を表す。");
    article2.appendChild(p);
    main.append(article2);
    for (let thirdVowel = 0; thirdVowel < vowelArray.length; thirdVowel++) {
        let section = document.createElement("section");
        let h2 = document.createElement("h2");
        let h2Span1 = document.createElement("span");
        h2Span1.classList.add("xesada");
        h2Span1.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
        h2.append(h2Span1);
        let h2Span2 = document.createElement("span");
        h2Span2.classList.add("part-of-speech");
        h2Span2.textContent = vowelPartOfSpeechTypeArray[thirdVowel] + "詞";
        h2.append(h2Span2);
        main.appendChild(h2);
        let details = document.createElement("details");
        details.open = true;
        let summary = document.createElement("summary");
        summary.textContent = "";
        details.appendChild(summary);
        let dl = document.createElement("dl");
        for (let firstVowel = 0; firstVowel < vowelArray.length; firstVowel++) {
            for (let secondVowel = 0; secondVowel < vowelArray.length; secondVowel++) {
                let dt = document.createElement("dt");
                let word = document.createElement("b");
                word.classList.add("xesada");
                word.id = consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
                word.textContent = consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
                dt.appendChild(word);
                let wordPronunciation = document.createElement("b");
                wordPronunciation.classList.add("pronunciation");
                wordPronunciation.textContent = "/" + consonantPronunciationArray[firstConsonant] + vowelPronunciationArray[firstVowel] + consonantPronunciationArray[secondConsonant] + vowelPronunciationArray[secondVowel] + consonantPronunciationArray[thirdConsonant] + vowelPronunciationArray[thirdVowel] + "/";
                dt.appendChild(wordPronunciation);
                let wordCases = document.createElement("b");
                wordCases.classList.add("cases");
                wordCases.textContent = vowelCaseArray[firstVowel] + vowelCaseArray[secondVowel] + "格";
                dt.appendChild(wordCases);
                let wordPartOfSpeech = document.createElement("b");
                wordPartOfSpeech.classList.add("part-of-speech");
                wordPartOfSpeech.textContent = vowelPartOfSpeechTypeArray[thirdVowel] + "詞";
                dt.appendChild(wordPartOfSpeech);
                dl.appendChild(dt);
                let dd = document.createElement("dd");
                dd.textContent = "";
                // let details = document.createElement("details");
                // let summary = document.createElement("summary");
                // summary.textContent = "";
                // details.appendChild(summary);
                // let table = document.createElement("table");
                // let caption = document.createElement("caption");
                // let span = document.createElement("span");
                // span.classList.add("xesada")
                // span.textContent = consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
                // caption.append(span, "の活用表");
                // table.appendChild(caption);
                // let thead = document.createElement("thead");
                // let conjunctHorizontal = document.createElement("tr");
                // let blank = document.createElement("th");
                // blank.textContent = "";
                // conjunctHorizontal.appendChild(blank);
                // let prefixConsonant;
                // let prefixConcept;
                // let suffixConsonant;
                // let suffixConcept;
                // switch (thirdVowel) {
                // case 0: 
                //     prefixConsonant = upperTongueConsonantArray;
                //     prefixConcept = upperTongueConceptArray;
                //     suffixConsonant = middleTongueConsonantArray; 
                //     suffixConcept = middleTongueConceptArray;
                //     break;
                // case 1:
                //     prefixConsonant = lowerTongueConsonantArray;
                //     prefixConcept = lowerTongueConceptArray;
                //     suffixConsonant = middleTongueConsonantArray; 
                //     suffixConcept = middleTongueConceptArray;
                //     break;
                // case 2:
                //     prefixConsonant = lowerTongueConsonantArray;
                //     prefixConcept = lowerTongueConceptArray;
                //     suffixConsonant = upperTongueConsonantArray;
                //     suffixConcept = upperTongueConceptArray;
                //     break;
                // case 3:
                //     prefixConsonant = upperTongueConsonantArray;
                //     prefixConcept = upperTongueConceptArray;
                //     suffixConsonant = middleTongueConsonantArray; 
                //     suffixConcept = middleTongueConceptArray;
                //     break;
                // case 4:
                //     prefixConsonant = lowerTongueConsonantArray;
                //     prefixConcept = lowerTongueConceptArray;
                //     suffixConsonant = middleTongueConsonantArray; 
                //     suffixConcept = middleTongueConceptArray;
                //     break;
                // case 5:
                //     prefixConsonant = lowerTongueConsonantArray;
                //     prefixConcept = lowerTongueConceptArray;
                //     suffixConsonant = upperTongueConsonantArray;
                //     suffixConcept = upperTongueConceptArray;
                //     break;
                // }
                // for (let suffixIndex = 0; suffixIndex < suffixConsonant.length; suffixIndex++) {
                //     let th = document.createElement("th");
                //     let div = document.createElement("div");
                //     div.textContent = consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel] + suffixConsonant[suffixIndex];
                //     div.classList.add("xesada");
                //     th.appendChild(div);
                //     let divConcept = document.createElement("div");
                //     divConcept.textContent = suffixConcept[suffixIndex] + "形";
                //     divConcept.classList.add("concept");
                //     th.appendChild(divConcept);
                //     conjunctHorizontal.appendChild(th);
                // }
                // thead.appendChild(conjunctHorizontal);
                // table.appendChild(thead);
                // let tbody = document.createElement("tbody");
                // for (let prefixIndex = 0; prefixIndex < prefixConsonant.length; prefixIndex++) {
                //     let tr = document.createElement("tr");
                //     let th = document.createElement("th");
                //     let div = document.createElement("div");
                //     div.classList.add("xesada");
                //     div.textContent = prefixConsonant[prefixIndex] + consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
                //     let divConcept = document.createElement("div");
                //     divConcept.textContent = prefixConcept[prefixIndex] + "相";
                //     divConcept.classList.add("concept");
                //     th.appendChild(divConcept);
                //     tr.appendChild(th);
                //     for (let suffixIndex = 0; suffixIndex < suffixConsonant.length; suffixIndex++) {
                //         let td = document.createElement("td");
                //         let div = document.createElement("div");
                //         div.classList.add("xesada");
                //         div.textContent = prefixConsonant[prefixIndex] + consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel] + suffixConsonant[suffixIndex];
                //         td.appendChild(div);
                //         let divConcept = document.createElement("div");
                //         divConcept.append(prefixConcept[prefixIndex] + "相", document.createElement("wbr"), suffixConcept[suffixIndex] + "形");
                //         divConcept.classList.add("concept");
                //         td.appendChild(divConcept);
                //         tr.appendChild(td);
                //     }
                //     tbody.appendChild(tr);
                // }
                // table.appendChild(tbody);
                // details.appendChild(table);
                // dd.appendChild(details)
                dl.appendChild(dd);
            }
        }
        details.appendChild(dl);
        section.appendChild(details);
        main.appendChild(section);
        let hr = document.createElement("hr");
        main.appendChild(hr);
    }
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerOl = document.createElement("ol");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerOl.appendChild(footerLi1);
    let footerLi2 = document.createElement("li");
    let footerA2 = document.createElement("a");
    footerA2.href = "../index.html";
    footerA2.textContent = "子音総一覧";
    footerLi2.appendChild(footerA2);
    footerOl.appendChild(footerLi2);
    let footerLi3 = document.createElement("li");
    let footerA3 = document.createElement("a");
    footerA3.href = "../" + consonantArray[firstConsonant] + ".html";
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("xesada");
    footerSpan.textContent = consonantArray[firstConsonant];
    footerA3.append(footerSpan, "を頭字とする語根の一覧");
    footerLi3.appendChild(footerA3);
    footerOl.appendChild(footerLi3);
    let footerLi4 = document.createElement("li");
    let footerSpan2 = document.createElement("span");
    footerSpan2.classList.add("xesada");
    footerSpan2.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
    footerLi4.append(footerSpan2, "を語根とする単語の一覧");
    footerOl.appendChild(footerLi4);
    footer.appendChild(footerOl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * `html_index`ディレクトリの内部データを生成するための関数
 */
async function generate() {
    let directoryName = path.join("html_index");
    try {
        await fs.mkdir(directoryName, {recursive: true});
        console.log("ディレクトリ" + directoryName + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directoryName + "を作成できませんでした。", error);
    }
    await generateIndex();
    for (let firstConsonant = 0; firstConsonant < consonantArray.length; firstConsonant++) {
        await generateConsonant(firstConsonant);
        await generateConsonantDirectory(firstConsonant);
        for (let secondConsonant = 0; secondConsonant < consonantArray.length; secondConsonant++) {
            for (let thirdConsonant = 0; thirdConsonant < consonantArray.length; thirdConsonant++) {
                await generateRoot(firstConsonant, secondConsonant, thirdConsonant);
            }
        }
    }
    console.log("ディレクトリ" + directoryName + "の内部データを生成完了。");
}
generate();
