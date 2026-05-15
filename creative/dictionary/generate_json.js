const fs = require("fs").promises;
const path = require("path");
const beautify = require("json-beautify");
const consonantArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const vowelArray = ["a", "e", "i", "o", "u", "w"];
const vowelCaseArray = ["否", "与", "属", "対", "主", "流"];
const vowelPartOfSpeechTypeArray = ["附", "動", "容", "助", "副", "名"];
const vowelPronunciationArray = ["a", "e", "i", "o", "u", ""];

/**
 * json_indexディレクトリの内部データを生成するための関数。
 */
async function generateIndex() {
    let filename = path.join("json_index", "index.json");
    let consonants = [];
    for (let firstConsolant = 0; firstConsolant < consonantArray.length; firstConsolant++) {
        consonants.push({
            consonant: consonantArray[firstConsolant],
            consonantConcept: consonantConceptArray[firstConsolant],
            consonantHtmlHref: consonantArray[firstConsolant] + ".html",
        });
    }
    let object = {consonants};
    let pretty = beautify(object, null, 4, 100);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

/**
 * 指定された子音のJSONファイルを生成する関数
 * @param {number} firstConsonant 第一子音のインデックス
 * @returns {Promise<void>}
 */
async function generateConsonant(firstConsonant) {
    let filename = path.join("json_index", consonantArray[firstConsonant] + ".json");
    let roots = [];
    for (let secondConsonant = 0; secondConsonant < consonantArray.length; secondConsonant++) {
        for (let thirdConsonant = 0; thirdConsonant < consonantArray.length; thirdConsonant++) {
            roots.push({
                root: consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant],
                rootConcept: consonantConceptArray[firstConsonant] + consonantConceptArray[secondConsonant] + consonantConceptArray[thirdConsonant],
                rootHtmlHref: consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".html",
            });
        }
    }
    let object = {roots};
    let pretty = beautify(object, null, 4, 100);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

/**
 * 指定された子音のディレクトリを生成する関数
 * @param {number} firstConsonant 第一子音のインデックス
 * @returns {Promise<void>}
 */
async function generateConsonantDirectory(firstConsonant) {
    let directoryName = path.join("json_index", consonantArray[firstConsonant]);
    try {
        await fs.mkdir(directoryName, {recursive: true});
        console.log("ディレクトリ" + directoryName + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directoryName + "を作成できませんでした。", error);
    }
}

/**
 * 指定された語根のJSONファイルを生成する関数
 * @param {number} firstConsonant 第一子音のインデックス
 * @param {number} secondConsonant 第二子音のインデックス
 * @param {number} thirdConsonant 第三子音のインデックス
 * @returns {Promise<void>}
 */
async function generateRoot(firstConsonant, secondConsonant, thirdConsonant) {
    let filename = path.join("json_index", consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".json");
    let words = [];
    for (let l = 0; l < vowelArray.length; l++) {
        for (let m = 0; m < vowelArray.length; m++) {
            for (let n = 0; n < vowelArray.length; n++) {
                words.push({
                    word: consonantArray[firstConsonant] + vowelArray[l] + consonantArray[secondConsonant] + vowelArray[m] + consonantArray[thirdConsonant] + vowelArray[n],
                    wordPronunciation: consonantPronunciationArray[firstConsonant] + vowelPronunciationArray[l] + consonantPronunciationArray[secondConsonant] + vowelPronunciationArray[m] + consonantPronunciationArray[thirdConsonant] + vowelPronunciationArray[n],
                    wordPartOfSpeech: vowelPartOfSpeechTypeArray[n] + "詞",
                    wordCases: vowelCaseArray[l] + vowelCaseArray[m] + "格",
                    wordHtmlHref: consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".html" + "#" + consonantArray[firstConsonant] + vowelArray[l] + consonantArray[secondConsonant] + vowelArray[m] + consonantArray[thirdConsonant] + vowelArray[n],
                    WordMeaning: ""
                });
            }
        }
    }
    let object = {words};
    let pretty = beautify(object, null, 4, 100);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

/**
 * JSONファイルを生成する関数
 * @returns {Promise<void>}
 */
async function generate() {
    let directoryName = path.join("json_index");
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