import fs from "node:fs/promises";
import path from "node:path";
import {consonantArray, consonantConceptArray, consonantPronunciationArray, consonantPlaceArray, consonantRowArray, consonantPolarityArray, vowelArray, vowelCaseArray, vowelPartOfSpeechTypeArray, vowelPronunciationArray, vowelPronunciationReferenceArray, vowelBacknessArray, vowelRoundednessArray, vowelPartOfSpeechHorizontalTypeArray, vowelPartOfSpeechVerticalTypeArray, upperTongueConsonantArray, middleTongueConsonantArray, lowerTongueConsonantArray, upperTongueConceptArray, middleTongueConceptArray, lowerTongueConceptArray, affixConsonantArray, affixConceptArray, cantillationMarkArray, cantillationConceptArray, cantillationPronunciationArray, minMaxMap} from "./arraydata.js";
/**
 * `json_index`ディレクトリの内部データを生成するための関数。
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
    let pretty = JSON.stringify(object, null, 4);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * 指定された子音の`JSON`ファイルを生成する関数
 * @param {number} firstConsonant 第一子音の`index`
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
    let pretty = JSON.stringify(object, null, 4);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * 指定された子音のディレクトリを生成する関数
 * @param {number} firstConsonant 第一子音の`index`
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
 * 指定された語根の`JSON`ファイルを生成する関数
 * @param {number} firstConsonant 第一子音の`index`
 * @param {number} secondConsonant 第二子音の`index`
 * @param {number} thirdConsonant 第三子音の`index`
 * @returns {Promise<void>}
 */
async function generateRoot(firstConsonant, secondConsonant, thirdConsonant) {
    let filename = path.join("json_index", consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".json");
    let words = [];
    for (let firstVowel = 0; firstVowel < vowelArray.length; firstVowel++) {
        for (let secondVowel = 0; secondVowel < vowelArray.length; secondVowel++) {
            for (let thirdVowel = 0; thirdVowel < vowelArray.length; thirdVowel++) {
                words.push({
                    word: consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel],
                    wordPronunciation: consonantPronunciationArray[firstConsonant] + vowelPronunciationArray[firstVowel] + consonantPronunciationArray[secondConsonant] + vowelPronunciationArray[secondVowel] + consonantPronunciationArray[thirdConsonant] + vowelPronunciationArray[thirdVowel],
                    wordPartOfSpeech: vowelPartOfSpeechTypeArray[thirdVowel] + "詞",
                    wordCases: vowelCaseArray[firstVowel] + vowelCaseArray[secondVowel] + "格",
                    wordHtmlHref: consonantArray[firstConsonant] + "/" + consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".html" + "#" + consonantArray[firstConsonant] + vowelArray[firstVowel] + consonantArray[secondConsonant] + vowelArray[secondVowel] + consonantArray[thirdConsonant] + vowelArray[thirdVowel],
                    wordMeaning: ""
                });
            }
        }
    }
    let object = {words};
    let pretty = JSON.stringify(object, null, 4);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * `JSON`ファイルを生成する関数
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