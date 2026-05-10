const fs = require("fs").promises;
const path = require("path");
const {JSDOM} = require("jsdom");
const beautify = require("js-beautify").html;
const consonantArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const minMaxMap = [[-4, -1], [-4, -1], [-3, 0], [-3, 0], [-2, 1], [-2, 1], [-5, -2], [-5, -2], [0, 8], [0, 8], [-1, 2], [-1, 2], [2, 5], [2, 5], [1, 4], [1, 4], [0, 3], [0, 3]];
const circleStyle = "@media(prefers-color-scheme: light){circle{fill: #000000;}}@media(prefers-color-scheme: dark){circle{fill: #c99410;}}";
/**
 * 指定された子音のインデックスに対応する最小値と最大値を返す関数
 * @param {*} i 子音のインデックス
 * @returns `minMaxMap`配列の`i`番目の要素、存在しない場合は`[0, 0]`を返す関数
 */
function getMinMax(i) {
    return minMaxMap[i] || [0, 0];
}
/**
 * SVGに円を追加する関数
 * @param {*} svg SVG要素
 * @param {*} cx 円の中心のx座標
 * @param {*} cy 円の中心のy座標
 * @param {*} r 円の半径
 */
function addCircle(svg, cx, cy, r) {
    const circle = svg.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    svg.appendChild(circle);
}
/**
 * SVGにスタイルを追加する関数
 * @param {*} svg SVG要素
 * @param {*} styleText スタイルテキスト
 */
function addStyle(svg, styleText) {
    const style = svg.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = styleText;
    svg.appendChild(style);
}
/**
 * SVGをファイルに書き出す関数
 * @param {*} filename ファイル名
 * @param {*} svg SVG要素
 */
async function writeSVG(filename, svg) {
    const serializer = new svg.ownerDocument.defaultView.XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const content = beautify(svgString, {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, content);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * ファビコンディレクトリを生成する関数
 *
 * ディレクトリ内には、子ディレクトリである子ファビコンファイルへのリンクが含まれる
 */
async function generateIndex() {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const doc = dom.window.document;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);
    addCircle(svg, 50, 50, 25);
    for (let i = 0; i < 8; i++) {
        addCircle(svg, 50 + 37.5 * Math.cos(i * Math.PI / 4), 50 + 37.5 * Math.sin(i * Math.PI / 4), 12.5);
    }
    addStyle(svg, circleStyle);
    await writeSVG(path.join("favicon_index", "index.svg"), svg);
}
/**
 * 指定された子音のファビコンを生成する関数
 * @param {number} firstConsonant 子音のインデックス
 */
async function generateConsonant(firstConsonant) {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const doc = dom.window.document;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);
    if (firstConsonant % 2 === 1) {
        addCircle(svg, 50, 50, 30);
    }
    const [min, max] = getMinMax(firstConsonant);
    for (let j = min; j < max; j++) {
        const cx = 50 + 40 * Math.cos(j * Math.PI / 4);
        const cy = 50 + 40 * Math.sin(j * Math.PI / 4);
        addCircle(svg, cx, cy, 10);
    }
    addStyle(svg, circleStyle);
    await writeSVG(path.join("favicon_index", consonantArray[firstConsonant] + ".svg"), svg);
}
/**
 * 指定された子音の組み合わせのファビコンを生成する関数
 * @param {number} firstConsonant 第一子音のインデックス
 * @param {number} secondConsonant 第二子音のインデックス
 * @param {number} thirdConsonant 第三子音のインデックス
 */
async function generateRoot(firstConsonant, secondConsonant, thirdConsonant) {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const doc = dom.window.document;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);
    const positions = [[25, 25, firstConsonant], [75, 25, secondConsonant], [50, 75, thirdConsonant]];
    const centerCircleRadius = 15;
    const circleOffset = 20;
    const circleRadius = 5;
    positions.forEach(([cx, cy, idx]) => {
        if (idx % 2 === 1) {
            addCircle(svg, cx, cy, centerCircleRadius);
        }
        const [min, max] = getMinMax(idx);
        for (let n = min; n < max; n++) {
            const x = cx + circleOffset * Math.cos(n * Math.PI / 4);
            const y = cy + circleOffset * Math.sin(n * Math.PI / 4);
            addCircle(svg, x, y, circleRadius);
        }
    });
    addStyle(svg, circleStyle);
    const filename = path.join("favicon_index", consonantArray[firstConsonant], consonantArray[firstConsonant] + consonantArray[secondConsonant] + consonantArray[thirdConsonant] + ".svg");
    await writeSVG(filename, svg);
}
/**
 * 指定された子音の組み合わせのファビコンを生成する関数
 * @param {number} firstConsonant 第一子音のインデックス
 */
async function generateConsonantDirectory(firstConsonant) {
    let directoryName = path.join("favicon_index", consonantArray[firstConsonant]);
    try {
        await fs.mkdir(directoryName, {recursive: true});
        console.log("ディレクトリ" + directoryName + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directoryName + "を作成できませんでした。", error);
    }
}
/**
 * ファビコンディレクトリを生成するスクリプト
 *
 * ディレクトリ内には、子ディレクトリである子ファビコンファイルへのリンクが含まれる
 */
async function generate() {
    const directoryName = path.join("favicon_index");
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