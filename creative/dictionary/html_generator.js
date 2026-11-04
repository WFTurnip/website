import fs from "node:fs/promises";
import path from "node:path";
import {JSDOM} from "jsdom";
import jsBeatify from "js-beautify";
const {html: beautify} = jsBeatify;
import {consonantArray, consonantConceptArray, consonantPronunciationArray, consonantPlaceArray, consonantRowArray, consonantPolarityArray, vowelArray, vowelCaseArray, vowelPartOfSpeechTypeArray, vowelPronunciationArray, vowelPronunciationReferenceArray, vowelBacknessArray, vowelRoundednessArray, vowelPartOfSpeechHorizontalTypeArray, vowelPartOfSpeechVerticalTypeArray, upperTongueConsonantArray, middleTongueConsonantArray, lowerTongueConsonantArray, upperTongueConceptArray, middleTongueConceptArray, lowerTongueConceptArray, affixConsonantArray, affixConceptArray, cantillationMarkArray, cantillationConceptArray, cantillationPronunciationArray, minMaxMap} from "./arraydata.js";
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
    let linkPagesStyle = document.createElement("link");
    linkPagesStyle.rel = "stylesheet";
    linkPagesStyle.href = "../style/pages.css";
    head.appendChild(linkPagesStyle);
    let linkBodyStyle = document.createElement("link");
    linkBodyStyle.rel = "stylesheet";
    linkBodyStyle.href = "../style/body.css";
    head.appendChild(linkBodyStyle);
    let linkFontsStyle = document.createElement("link");
    linkFontsStyle.rel = "stylesheet";
    linkFontsStyle.href = "../style/fonts.css";
    head.appendChild(linkFontsStyle);
    let linkBreadcrumbStyle = document.createElement("link");
    linkBreadcrumbStyle.rel = "stylesheet";
    linkBreadcrumbStyle.href = "../style/breadcrumb.css";
    head.appendChild(linkBreadcrumbStyle);
    let linkFavicon = document.createElement("link");
    linkFavicon.rel = "icon";
    linkFavicon.href = "../favicon_index" + "/index" + ".svg";
    head.appendChild(linkFavicon);
    let body = document.body;
    let breadcrumb = document.createElement("ol");
    let firstListItem = document.createElement("li");
    let firstAnchor = document.createElement("a");
    firstAnchor.href = "../dictionary.html";
    firstAnchor.textContent = "表紙";
    firstListItem.appendChild(firstAnchor);
    breadcrumb.appendChild(firstListItem);
    let secondListItem = document.createElement("li");
    secondListItem.textContent = "子音総一覧";
    breadcrumb.appendChild(secondListItem);
    let header = document.createElement("header");
    header.appendChild(breadcrumb.cloneNode(true));
    body.appendChild(header);
    let main = document.createElement("main");
    let mainTitle = document.createElement("h1");
    mainTitle.textContent = "子音総一覧";
    main.appendChild(mainTitle);
    let figureArticle = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index" + "/index" + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    figureArticle.appendChild(figure);
    main.appendChild(figureArticle);
    let descriptionList = document.createElement("dl");
    for (let firstConsonant = 0; firstConsonant < consonantArray.length; firstConsonant++) {
        let descriptionTerm = document.createElement("dt");
        descriptionTerm.id = consonantArray[firstConsonant];
        let consonant = document.createElement("b");
        let anchor = document.createElement("a");
        anchor.classList.add("xesada");
        anchor.setAttribute("translate", "no");
        anchor.href = consonantArray[firstConsonant] + ".html";
        anchor.textContent = consonantArray[firstConsonant];
        consonant.appendChild(anchor);
        descriptionTerm.appendChild(consonant);
        descriptionList.appendChild(descriptionTerm);
        let descriptionDetails = document.createElement("dd");
        descriptionDetails.textContent = consonantConceptArray[firstConsonant];
        descriptionList.appendChild(descriptionDetails);
        main.appendChild(descriptionList);
    }
    body.appendChild(main);
    let footer = document.createElement("footer");
    footer.appendChild(breadcrumb);
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
 * @param {number} firstConsonant 第一子音
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
    let linkPagesStyle = document.createElement("link");
    linkPagesStyle.rel = "stylesheet";
    linkPagesStyle.href = "../style/pages.css";
    head.appendChild(linkPagesStyle);
    let linkBodyStyle = document.createElement("link");
    linkBodyStyle.rel = "stylesheet";
    linkBodyStyle.href = "../style/body.css";
    head.appendChild(linkBodyStyle);
    let linkFontsStyle = document.createElement("link");
    linkFontsStyle.rel = "stylesheet";
    linkFontsStyle.href = "../style/fonts.css";
    head.appendChild(linkFontsStyle);
    let linkBreadcrumbStyle = document.createElement("link");
    linkBreadcrumbStyle.rel = "stylesheet";
    linkBreadcrumbStyle.href = "../style/breadcrumb.css";
    head.appendChild(linkBreadcrumbStyle);
    let linkFavicon = document.createElement("link");
    linkFavicon.rel = "icon";
    linkFavicon.href = "../favicon_index" + "/" + consonantArray[firstConsonant] + ".svg";
    head.appendChild(linkFavicon);
    let body = document.body;
    let breadcrumb = document.createElement("ol");
    let firstListItem = document.createElement("li");
    let firstAnchor = document.createElement("a");
    firstAnchor.href = "../dictionary.html";
    firstAnchor.textContent = "表紙";
    firstListItem.appendChild(firstAnchor);
    breadcrumb.appendChild(firstListItem);
    let secondListItem = document.createElement("li");
    let secondAnchor = document.createElement("a");
    secondAnchor.href = "index.html";
    secondAnchor.textContent = "子音総一覧";
    secondListItem.appendChild(secondAnchor);
    breadcrumb.appendChild(secondListItem);
    let thirdListItem = document.createElement("li");
    let thirdSpan = document.createElement("span");
    thirdSpan.classList.add("xesada");
    thirdSpan.setAttribute("translate", "no");
    thirdSpan.textContent = consonantArray[firstConsonant];
    thirdListItem.append(thirdSpan, "を頭字とする語根の一覧");
    breadcrumb.appendChild(thirdListItem);
    let header = document.createElement("header");
    header.appendChild(breadcrumb.cloneNode(true));
    body.appendChild(header);
    let main = document.createElement("main");
    let mainTitle = document.createElement("h1");
    let mainTitleSpan = document.createElement("span");
    mainTitleSpan.classList.add("xesada");
    mainTitleSpan.setAttribute("translate", "no");
    mainTitleSpan.textContent = consonantArray[firstConsonant];
    mainTitle.append(mainTitleSpan, "を頭字とする語根の一覧");
    main.appendChild(mainTitle);
    let figureArticle = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index/" + consonantArray[firstConsonant] + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    figureArticle.appendChild(figure);
    main.appendChild(figureArticle);
    let article = document.createElement("article");
    let paragraph = document.createElement("p");
    let bold = document.createElement("b");
    bold.textContent = consonantConceptArray[firstConsonant];
    bold.classList.add("concept");
    paragraph.append("この子音は", bold, "の概念を表す。");
    article.appendChild(paragraph);
    main.appendChild(article);
    let descriptionList = document.createElement("dl");
    for (let secondConsonant = 0; secondConsonant < consonantArray.length; secondConsonant++) {
        for (let thirdConsonant = 0; thirdConsonant < consonantArray.length; thirdConsonant++) {
            let descriptionTerm = document.createElement("dt");
            descriptionTerm.id = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
            let root = document.createElement("b");
            let anchor = document.createElement("a");
            anchor.classList.add("xesada");
            anchor.setAttribute("translate", "no");
            anchor.href = consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".html";
            anchor.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
            root.appendChild(anchor);
            descriptionTerm.appendChild(root);
            descriptionList.appendChild(descriptionTerm);
            let descriptionDetails = document.createElement("dd");
            descriptionDetails.textContent = consonantConceptArray[firstConsonant] + consonantConceptArray[secondConsonant] + consonantConceptArray[thirdConsonant];
            descriptionList.appendChild(descriptionDetails);
        }
    }
    main.appendChild(descriptionList);
    body.appendChild(main);
    let footer = document.createElement("footer");
    footer.appendChild(breadcrumb);
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
 * @param {number} firstConsonant 第一子音
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
 * @param {number} firstConsonant 第一子音
 * @param {number} secondConsonant 第二子音
 * @param {number} thirdConsonant 第三子音
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
    title.textContent = consonantArray[firstConsonant].toUpperCase() + consonantArray[secondConsonant].toUpperCase() + consonantArray[thirdConsonant].toUpperCase() + "を語根とする語の一覧";
    head.appendChild(title);
    let linkPagesStyle = document.createElement("link");
    linkPagesStyle.rel = "stylesheet";
    linkPagesStyle.href = "../../style/pages.css";
    head.appendChild(linkPagesStyle);
    let linkBodyStyle = document.createElement("link");
    linkBodyStyle.rel = "stylesheet";
    linkBodyStyle.href = "../../style/body.css";
    head.appendChild(linkBodyStyle);
    let linkFontsStyle = document.createElement("link");
    linkFontsStyle.rel = "stylesheet";
    linkFontsStyle.href = "../../style/fonts.css";
    head.appendChild(linkFontsStyle);
    let linkBreadcrumbStyle = document.createElement("link");
    linkBreadcrumbStyle.rel = "stylesheet";
    linkBreadcrumbStyle.href = "../../style/breadcrumb.css";
    head.appendChild(linkBreadcrumbStyle);
    let linkTableStyle = document.createElement("link");
    linkTableStyle.rel = "stylesheet";
    linkTableStyle.href = "../../style/table.css";
    head.appendChild(linkTableStyle);
    let linkDetailsToggleStyle = document.createElement("link");
    linkDetailsToggleStyle.rel = "stylesheet";
    linkDetailsToggleStyle.href = "../../style/details_toggle.css";
    head.appendChild(linkDetailsToggleStyle);
    let linkFavicon = document.createElement("link");
    linkFavicon.rel = "icon";
    linkFavicon.href = "../../favicon_index/" + consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".svg";
    head.appendChild(linkFavicon);
    let sourceDetailsToggleScript = document.createElement("script");
    sourceDetailsToggleScript.src = "../../details_toggle.js";
    head.appendChild(sourceDetailsToggleScript);
    let body = document.body;
    let breadcrumb = document.createElement("ol");
    let firstListItem = document.createElement("li");
    let firstAnchor = document.createElement("a");
    firstAnchor.href = "../../dictionary.html";
    firstAnchor.textContent = "表紙";
    firstListItem.appendChild(firstAnchor);
    breadcrumb.appendChild(firstListItem);
    let secondListItem = document.createElement("li");
    let secondAnchor = document.createElement("a");
    secondAnchor.href = "../index.html";
    secondAnchor.textContent = "子音総一覧";
    secondListItem.appendChild(secondAnchor);
    breadcrumb.appendChild(secondListItem);
    let thirdListItem = document.createElement("li");
    let breadcrumbA3 = document.createElement("a");
    breadcrumbA3.href = "../" + consonantArray[firstConsonant] + ".html";
    let thirdSpan = document.createElement("span");
    thirdSpan.classList.add("xesada");
    thirdSpan.setAttribute("translate", "no");
    thirdSpan.textContent = consonantArray[firstConsonant];
    breadcrumbA3.append(thirdSpan, "を頭字とする語根の一覧");
    thirdListItem.appendChild(breadcrumbA3);
    breadcrumb.appendChild(thirdListItem);
    let forthListItem = document.createElement("li");
    let forthSpan = document.createElement("span");
    forthSpan.classList.add("xesada");
    forthSpan.setAttribute("translate", "no");
    forthSpan.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
    forthListItem.append(forthSpan, "を語根とする語の一覧");
    breadcrumb.appendChild(forthListItem);
    let header = document.createElement("header");
    header.appendChild(breadcrumb.cloneNode(true));
    body.appendChild(header);
    let main = document.createElement("main");
    let mainTitle = document.createElement("h1");
    let mainTitleSpan = document.createElement("span");
    mainTitleSpan.classList.add("xesada");
    mainTitleSpan.setAttribute("translate", "no");
    mainTitleSpan.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant];
    mainTitle.append(mainTitleSpan, "を語根とする語の一覧");
    main.appendChild(mainTitle);
    let figureArticle = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../../favicon_index/" + consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    figureArticle.appendChild(figure);
    main.appendChild(figureArticle);
    let article = document.createElement("article");
    let paragraph = document.createElement("p");
    let bold = document.createElement("b");
    bold.textContent = consonantConceptArray[firstConsonant] + consonantConceptArray[secondConsonant] + consonantConceptArray[thirdConsonant];
    bold.classList.add("concept");
    paragraph.append("この語根は", bold, "の概念を表す。");
    article.appendChild(paragraph);
    main.append(article);
    for (let thirdVowel = 0; thirdVowel < vowelArray.length; thirdVowel++) {
        let section = document.createElement("section");
        let sectionTitle = document.createElement("h2");
        let sectionTitleSpan = document.createElement("span");
        sectionTitleSpan.classList.add("xesada");
        sectionTitleSpan.setAttribute("translate", "no");
        sectionTitleSpan.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
        sectionTitle.append(sectionTitleSpan);
        let partOfSpeechType = document.createElement("span");
        partOfSpeechType.classList.add("part-of-speech");
        partOfSpeechType.textContent = vowelPartOfSpeechTypeArray[thirdVowel] + "詞";
        sectionTitle.append(partOfSpeechType);
        main.appendChild(sectionTitle);
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.textContent = vowelPartOfSpeechTypeArray[thirdVowel] + "詞の一覧";
        details.appendChild(summary);
        let tableDetails = document.createElement("details");
        let tableSummary = document.createElement("summary");
        let summarySpan = document.createElement("span");
        summarySpan.classList.add("xesada");
        summarySpan.setAttribute("translate", "no");
        summarySpan.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
        tableSummary.append(summarySpan, "の活用表");
        tableDetails.appendChild(tableSummary);
        let table = document.createElement("table");
        let caption = document.createElement("caption");
        let captionSpan = document.createElement("span");
        captionSpan.classList.add("xesada");
        captionSpan.setAttribute("translate", "no");
        captionSpan.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
        caption.append(captionSpan, "の活用表");
        table.appendChild(caption);
        let thead = document.createElement("thead");
        let conjunctHorizontal = document.createElement("tr");
        let blank = document.createElement("th");
        blank.textContent = "";
        conjunctHorizontal.appendChild(blank);
        let prefixConsonant;
        let prefixConcept;
        let suffixConsonant;
        let suffixConcept;
        switch (thirdVowel) {
            case 0:
                prefixConsonant = upperTongueConsonantArray;
                prefixConcept = upperTongueConceptArray;
                suffixConsonant = middleTongueConsonantArray;
                suffixConcept = middleTongueConceptArray;
                break;
            case 1:
                prefixConsonant = lowerTongueConsonantArray;
                prefixConcept = lowerTongueConceptArray;
                suffixConsonant = middleTongueConsonantArray;
                suffixConcept = middleTongueConceptArray;
                break;
            case 2:
                prefixConsonant = lowerTongueConsonantArray;
                prefixConcept = lowerTongueConceptArray;
                suffixConsonant = upperTongueConsonantArray;
                suffixConcept = upperTongueConceptArray;
                break;
            case 3:
                prefixConsonant = upperTongueConsonantArray;
                prefixConcept = upperTongueConceptArray;
                suffixConsonant = middleTongueConsonantArray;
                suffixConcept = middleTongueConceptArray;
                break;
            case 4:
                prefixConsonant = lowerTongueConsonantArray;
                prefixConcept = lowerTongueConceptArray;
                suffixConsonant = middleTongueConsonantArray;
                suffixConcept = middleTongueConceptArray;
                break;
            case 5:
                prefixConsonant = lowerTongueConsonantArray;
                prefixConcept = lowerTongueConceptArray;
                suffixConsonant = upperTongueConsonantArray;
                suffixConcept = upperTongueConceptArray;
                break;
        }
        for (let suffixIndex = 0; suffixIndex < suffixConsonant.length; suffixIndex++) {
            let th = document.createElement("th");
            let div = document.createElement("div");
            div.classList.add("xesada");
            div.setAttribute("translate", "no");
            div.textContent = consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel] + suffixConsonant[suffixIndex];
            th.appendChild(div);
            let divConcept = document.createElement("div");
            divConcept.textContent = suffixConcept[suffixIndex] + "接尾辞";
            divConcept.classList.add("concept");
            th.appendChild(divConcept);
            conjunctHorizontal.appendChild(th);
        }
        thead.appendChild(conjunctHorizontal);
        table.appendChild(thead);
        let tbody = document.createElement("tbody");
        for (let prefixIndex = 0; prefixIndex < prefixConsonant.length; prefixIndex++) {
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            let div = document.createElement("div");
            div.classList.add("xesada");
            div.setAttribute("translate", "no");
            div.textContent = prefixConsonant[prefixIndex] + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
            th.appendChild(div);
            let divConcept = document.createElement("div");
            divConcept.textContent = prefixConcept[prefixIndex] + "接頭辞";
            divConcept.classList.add("concept");
            th.appendChild(divConcept);
            tr.appendChild(th);
            for (let suffixIndex = 0; suffixIndex < suffixConsonant.length; suffixIndex++) {
                let td = document.createElement("td");
                let div = document.createElement("div");
                div.classList.add("xesada");
                div.setAttribute("translate", "no");
                div.textContent = prefixConsonant[prefixIndex] + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + vowelArray[thirdVowel] + suffixConsonant[suffixIndex];
                td.appendChild(div);
                let divConcept = document.createElement("div");
                divConcept.append(prefixConcept[prefixIndex] + "接頭辞", document.createElement("wbr"), suffixConcept[suffixIndex] + "接尾辞");
                divConcept.classList.add("concept");
                td.appendChild(divConcept);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        tableDetails.appendChild(table);
        details.appendChild(tableDetails)
        let descriptionList = document.createElement("dl");
        for (let firstVowel = 0; firstVowel < vowelArray.length; firstVowel++) {
            for (let secondVowel = 0; secondVowel < vowelArray.length; secondVowel++) {
                let descriptionTerm = document.createElement("dt");
                let word = document.createElement("b");
                word.classList.add("xesada");
                word.setAttribute("translate", "no");
                word.id = consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
                word.textContent = consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel];
                descriptionTerm.appendChild(word);
                let wordPronunciation = document.createElement("b");
                wordPronunciation.classList.add("pronunciation");
                wordPronunciation.setAttribute("translate", "no");
                wordPronunciation.textContent = "/" + consonantPronunciationArray[firstConsonant] + vowelPronunciationArray[firstVowel] + consonantPronunciationArray[secondConsonant] + vowelPronunciationArray[secondVowel] + consonantPronunciationArray[thirdConsonant] + vowelPronunciationArray[thirdVowel] + "/";
                descriptionTerm.appendChild(wordPronunciation);
                let wordCases = document.createElement("b");
                wordCases.classList.add("cases");
                wordCases.textContent = vowelCaseArray[firstVowel] + vowelCaseArray[secondVowel] + "格";
                descriptionTerm.appendChild(wordCases);
                let wordPartOfSpeech = document.createElement("b");
                wordPartOfSpeech.classList.add("part-of-speech");
                wordPartOfSpeech.textContent = vowelPartOfSpeechTypeArray[thirdVowel] + "詞";
                descriptionTerm.appendChild(wordPartOfSpeech);
                descriptionList.appendChild(descriptionTerm);
                let descriptionDetails = document.createElement("dd");
                descriptionDetails.textContent = "";
                descriptionList.appendChild(descriptionDetails);
            }
        }
        details.appendChild(descriptionList);
        section.appendChild(details);
        main.appendChild(section);
        let horizontalRule = document.createElement("hr");
        main.appendChild(horizontalRule);
    }
    body.appendChild(main);
    let footer = document.createElement("footer");
    footer.appendChild(breadcrumb);
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
await generate();
