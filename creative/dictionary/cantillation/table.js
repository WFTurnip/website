import {
    consonantArray, consonantConceptArray, consonantPronunciationArray, consonantPlaceArray, consonantRowArray, consonantPolarityArray, vowelArray, vowelCaseArray, vowelPartOfSpeechTypeArray, vowelPronunciationArray, vowelPronunciationReferenceArray, vowelBacknessArray, vowelRoundednessArray, vowelPartOfSpeechHorizontalTypeArray, vowelPartOfSpeechVerticalTypeArray, upperTongueConsonantArray, middleTongueConsonantArray, lowerTongueConsonantArray, upperTongueConceptArray, middleTongueConceptArray, lowerTongueConceptArray, affixConsonantArray, affixConceptArray, cantillationMarkArray, cantillationConceptArray, cantillationPitchArray, cantillationPronunciationArray, notationMarkArray, notationConceptArray, notationPitchArray, minMaxMap
} from "../arraydata.js";
function generateCantillationPronunciationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "朗唱発音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelRow.appendChild(blank);
    for (let cantillationConceptIndex = 0; cantillationConceptIndex < cantillationConceptArray.length; cantillationConceptIndex++) {
        let th = document.createElement("th");
        let vowelPronunciation = document.createElement("div");
        vowelPronunciation.classList.add("concept");
        vowelPronunciation.textContent = cantillationConceptArray[cantillationConceptIndex] + "声符";
        th.appendChild(vowelPronunciation);
        vowelRow.appendChild(th);
    }
    thead.appendChild(vowelRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let cantillationPitchIndex = 0; cantillationPitchIndex < cantillationPitchArray.length; cantillationPitchIndex++) {
        let row = document.createElement("tr");
        let diacriticCell = document.createElement("th");
        let diacriticConcept = document.createElement("div");
        diacriticConcept.classList.add("concept");
        diacriticConcept.textContent = cantillationPitchArray[cantillationPitchIndex] + "声符";
        diacriticCell.appendChild(diacriticConcept);
        row.appendChild(diacriticCell);
        for (let cantillationConceptIndex = 0; cantillationConceptIndex < cantillationConceptArray.length; cantillationConceptIndex++) {
            let cell = document.createElement("td");
            let mark = document.createElement("div");
            mark.classList.add("xesada");
            mark.setAttribute("translate", "no");
            mark.textContent = "\u{25cc}" + cantillationMarkArray[cantillationConceptIndex + 7 * cantillationPitchIndex];
            cell.appendChild(mark);
            let markPronunciation = document.createElement("div");
            markPronunciation.classList.add("pronunciation");
            markPronunciation.setAttribute("translate", "no");
            markPronunciation.textContent = "/" + cantillationPronunciationArray[cantillationConceptIndex + 7 * cantillationPitchIndex] + "/";
            cell.appendChild(markPronunciation);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById("cantillation-pronunciation-table").appendChild(table);
}
function generateCantillationConceptTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "朗唱記号表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelRow.appendChild(blank);
    for (let cantillationConceptIndex = 0; cantillationConceptIndex < cantillationConceptArray.length; cantillationConceptIndex++) {
        let th = document.createElement("th");
        let vowelPronunciation = document.createElement("div");
        vowelPronunciation.classList.add("concept");
        vowelPronunciation.textContent = cantillationConceptArray[cantillationConceptIndex] + "声符";
        th.appendChild(vowelPronunciation);
        vowelRow.appendChild(th);
    }
    thead.appendChild(vowelRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let cantillationPitchIndex = 0; cantillationPitchIndex < cantillationPitchArray.length; cantillationPitchIndex++) {
        let row = document.createElement("tr");
        let diacriticCell = document.createElement("th");
        let diacriticConcept = document.createElement("div");
        diacriticConcept.classList.add("concept");
        diacriticConcept.textContent = cantillationPitchArray[cantillationPitchIndex] + "声符";
        diacriticCell.appendChild(diacriticConcept);
        row.appendChild(diacriticCell);
        for (let cantillationConceptIndex = 0; cantillationConceptIndex < cantillationConceptArray.length; cantillationConceptIndex++) {
            let cell = document.createElement("td");
            let mark = document.createElement("div");
            mark.classList.add("xesada");
            mark.setAttribute("translate", "no");
            mark.textContent = "\u{25cc}" + cantillationMarkArray[cantillationConceptIndex + 7 * cantillationPitchIndex];
            cell.appendChild(mark);
            let markConcept = document.createElement("div");
            markConcept.classList.add("concept");
            markConcept.setAttribute("translate", "no");
            markConcept.textContent = cantillationPitchArray[cantillationPitchIndex] + cantillationConceptArray[cantillationConceptIndex] + "声符";
            cell.appendChild(markConcept);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById("cantillation-marks-table").appendChild(table);
}
function generateNotationMarksTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "旋律体系表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelRow.appendChild(blank);
    for (let cantillationConceptIndex = 0; cantillationConceptIndex < notationConceptArray.length; cantillationConceptIndex++) {
        let th = document.createElement("th");
        let vowelPronunciation = document.createElement("div");
        vowelPronunciation.classList.add("concept");
        vowelPronunciation.textContent = notationConceptArray[cantillationConceptIndex] + "音符";
        th.appendChild(vowelPronunciation);
        vowelRow.appendChild(th);
    }
    thead.appendChild(vowelRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let cantillationPitchIndex = 0; cantillationPitchIndex < notationPitchArray.length; cantillationPitchIndex++) {
        let row = document.createElement("tr");
        let diacriticCell = document.createElement("th");
        let diacriticConcept = document.createElement("div");
        diacriticConcept.classList.add("concept");
        diacriticConcept.textContent = notationPitchArray[cantillationPitchIndex] + "音符";
        diacriticCell.appendChild(diacriticConcept);
        row.appendChild(diacriticCell);
        for (let cantillationConceptIndex = 0; cantillationConceptIndex < notationConceptArray.length; cantillationConceptIndex++) {
            let cell = document.createElement("td");
            let mark = document.createElement("div");
            mark.classList.add("xesada");
            mark.setAttribute("translate", "no");
            mark.textContent = notationMarkArray[cantillationConceptIndex + 5 * cantillationPitchIndex];
            cell.appendChild(mark);
            let markConcept = document.createElement("div");
            markConcept.classList.add("concept");
            markConcept.setAttribute("translate", "no");
            markConcept.textContent = notationPitchArray[cantillationPitchIndex] + notationConceptArray[cantillationConceptIndex] + "音符";
            cell.appendChild(markConcept);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById("notation-marks-table").appendChild(table);
}
window.addEventListener("load", () => {
    generateCantillationPronunciationTable();
    generateCantillationConceptTable();
    generateNotationMarksTable();
});