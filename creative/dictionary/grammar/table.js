function generateConsonantPronunciationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "子音発音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let consonantsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    blank.rowSpan = 2;
    consonantsPronunciationHorizontalRow.appendChild(blank);
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantPlaceArray[consonantPlaceIndex] + "音";
        consonantsPronunciationHorizontal.colSpan = 2;
        consonantsPronunciationHorizontalRow.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(consonantsPronunciationHorizontalRow);
    let consonantsPronunciationHorizontalClassRow = document.createElement("tr");
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        for (let consonantPolarityIndex = 0; consonantPolarityIndex < consonantPolarityArray.length; consonantPolarityIndex++) {
            let consonantsPronunciationHorizontalClass = document.createElement("th");
            consonantsPronunciationHorizontalClass.textContent = consonantPolarityArray[consonantPolarityIndex] + "震音";
            consonantsPronunciationHorizontalClassRow.appendChild(consonantsPronunciationHorizontalClass);
        }
    }
    thead.appendChild(consonantsPronunciationHorizontalClassRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let consonantRowIndex = 0; consonantRowIndex < consonantRowArray.length; consonantRowIndex++) {
        let consonantVerticalRow = document.createElement("tr");
        let consonantsPronunciationVertical = document.createElement("th");
        consonantsPronunciationVertical.textContent = consonantRowArray[consonantRowIndex] + "舌音";
        consonantVerticalRow.appendChild(consonantsPronunciationVertical);
        for (let consonantIndex = 0; consonantIndex < consonantArray.length / consonantRowArray.length; consonantIndex++) {
            let consonantsCell = document.createElement("td");
            let consonants = document.createElement("div");
            consonants.textContent = consonantArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex];
            consonants.classList.add("xesada");
            consonantsCell.appendChild(consonants);
            let consonantsPronunciation = document.createElement("div");
            consonantsPronunciation.textContent = "/" + consonantPronunciationArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex] + "/";
            consonantsPronunciation.classList.add("pronunciation");
            consonantsCell.appendChild(consonantsPronunciation);
            consonantVerticalRow.appendChild(consonantsCell);
        }
        tbody.appendChild(consonantVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("consonant-pronunciation-table").appendChild(table);
}
function generateVowelPronunciationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "母音発音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let vowelBacknessIndex = 0; vowelBacknessIndex < vowelBacknessArray.length; vowelBacknessIndex++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelBacknessArray[vowelBacknessIndex] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let vowelRoundednessIndex = 0; vowelRoundednessIndex < vowelRoundednessArray.length; vowelRoundednessIndex++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelRoundednessArray[vowelRoundednessIndex] + "母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let vowelIndex = 0; vowelIndex < vowelArray.length / vowelRoundednessArray.length; vowelIndex++) {
            let vowelsCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelArray[vowelRoundednessIndex * vowelArray.length / vowelRoundednessArray.length + vowelIndex];
            vowels.classList.add("xesada");
            vowelsCell.appendChild(vowels);
            let vowelsPronunciation = document.createElement("div");
            vowelsPronunciation.textContent = "/" + vowelPronunciationArray[vowelRoundednessIndex * vowelArray.length / vowelRoundednessArray.length + vowelIndex] + "/";
            vowelsPronunciation.classList.add("pronunciation");
            vowelsCell.appendChild(vowelsPronunciation);
            vowelsVerticalRow.appendChild(vowelsCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("vowel-pronunciation-table").appendChild(table);
}
function generateConsonantConceptTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "子音概念表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let consonantsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    blank.rowSpan = 2;
    consonantsPronunciationHorizontalRow.appendChild(blank);
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantPlaceArray[consonantPlaceIndex] + "音";
        consonantsPronunciationHorizontal.colSpan = 2;
        consonantsPronunciationHorizontalRow.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(consonantsPronunciationHorizontalRow);
    let consonantsPronunciationHorizontalClassRow = document.createElement("tr");
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        for (let consonantPolarityIndex = 0; consonantPolarityIndex < consonantPolarityArray.length; consonantPolarityIndex++) {
            let consonantsPronunciationHorizontalClass = document.createElement("th");
            consonantsPronunciationHorizontalClass.textContent = consonantPolarityArray[consonantPolarityIndex] + "震音";
            consonantsPronunciationHorizontalClassRow.appendChild(consonantsPronunciationHorizontalClass);
        }
    }
    thead.appendChild(consonantsPronunciationHorizontalClassRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let consonantRowIndex = 0; consonantRowIndex < consonantRowArray.length; consonantRowIndex++) {
        let consonantVerticalRow = document.createElement("tr");
        let consonantsPronunciationVertical = document.createElement("th");
        consonantsPronunciationVertical.textContent = consonantRowArray[consonantRowIndex] + "舌音";
        consonantVerticalRow.appendChild(consonantsPronunciationVertical);
        for (let consonantIndex = 0; consonantIndex < consonantArray.length / consonantRowArray.length; consonantIndex++) {
            let consonantsCell = document.createElement("td");
            let consonants = document.createElement("div");
            consonants.textContent = consonantArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex] + "\u{25CC}\u{25CC}\u{25CC}";
            consonants.classList.add("xesada");
            consonantsCell.appendChild(consonants);
            let consonantsConcept = document.createElement("div");
            consonantsConcept.textContent = consonantConceptArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex];
            consonantsConcept.classList.add("concept");
            consonantsCell.appendChild(consonantsConcept);
            consonantVerticalRow.appendChild(consonantsCell);
        }
        tbody.appendChild(consonantVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("consonant-concept-table").appendChild(table);
}
function generatePrefixConsonantTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接頭辞表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let consonantsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    blank.rowSpan = 2;
    consonantsPronunciationHorizontalRow.appendChild(blank);
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantPlaceArray[consonantPlaceIndex] + "音";
        consonantsPronunciationHorizontal.colSpan = 2;
        consonantsPronunciationHorizontalRow.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(consonantsPronunciationHorizontalRow);
    let consonantsPronunciationHorizontalClassRow = document.createElement("tr");
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        for (let consonantPolarityIndex = 0; consonantPolarityIndex < consonantPolarityArray.length; consonantPolarityIndex++) {
            let consonantsPronunciationHorizontalClass = document.createElement("th");
            consonantsPronunciationHorizontalClass.textContent = consonantPolarityArray[consonantPolarityIndex] + "震音";
            consonantsPronunciationHorizontalClassRow.appendChild(consonantsPronunciationHorizontalClass);
        }
    }
    thead.appendChild(consonantsPronunciationHorizontalClassRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let consonantRowIndex = 0; consonantRowIndex < consonantRowArray.length; consonantRowIndex++) {
        let consonantVerticalRow = document.createElement("tr");
        let consonantsPronunciationVertical = document.createElement("th");
        consonantsPronunciationVertical.textContent = consonantRowArray[consonantRowIndex] + "舌音";
        consonantVerticalRow.appendChild(consonantsPronunciationVertical);
        for (let consonantIndex = 0; consonantIndex < consonantArray.length / consonantRowArray.length; consonantIndex++) {
            let consonantsCell = document.createElement("td");
            let consonants = document.createElement("div");
            consonants.textContent = consonantArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex] + "\u{25CC}\u{25CC}\u{25CC}";
            consonants.classList.add("xesada");
            consonantsCell.appendChild(consonants);
            let consonantsPronunciation = document.createElement("div");
            consonantsPronunciation.textContent = consonantConceptArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex] + "接頭辞";
            consonantsPronunciation.classList.add("concept");
            consonantsCell.appendChild(consonantsPronunciation);
            consonantVerticalRow.appendChild(consonantsCell);
        }
        tbody.appendChild(consonantVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("prefix-consonant-table").appendChild(table);
}
function generateSuffixConsonantTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接尾辞表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let consonantsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    blank.rowSpan = 2;
    consonantsPronunciationHorizontalRow.appendChild(blank);
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantPlaceArray[consonantPlaceIndex] + "音";
        consonantsPronunciationHorizontal.colSpan = 2;
        consonantsPronunciationHorizontalRow.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(consonantsPronunciationHorizontalRow);
    let consonantsPronunciationHorizontalClassRow = document.createElement("tr");
    for (let consonantPlaceIndex = 0; consonantPlaceIndex < consonantPlaceArray.length; consonantPlaceIndex++) {
        for (let consonantPolarityIndex = 0; consonantPolarityIndex < consonantPolarityArray.length; consonantPolarityIndex++) {
            let consonantsPronunciationHorizontalClass = document.createElement("th");
            consonantsPronunciationHorizontalClass.textContent = consonantPolarityArray[consonantPolarityIndex] + "震音";
            consonantsPronunciationHorizontalClassRow.appendChild(consonantsPronunciationHorizontalClass);
        }
    }
    thead.appendChild(consonantsPronunciationHorizontalClassRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let consonantRowIndex = 0; consonantRowIndex < consonantRowArray.length; consonantRowIndex++) {
        let consonantVerticalRow = document.createElement("tr");
        let consonantsPronunciationVertical = document.createElement("th");
        consonantsPronunciationVertical.textContent = consonantRowArray[consonantRowIndex] + "舌音";
        consonantVerticalRow.appendChild(consonantsPronunciationVertical);
        for (let consonantIndex = 0; consonantIndex < consonantArray.length / consonantRowArray.length; consonantIndex++) {
            let consonantsCell = document.createElement("td");
            let consonants = document.createElement("div");
            consonants.textContent = "\u{25CC}\u{25CC}\u{25CC}" + consonantArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex];
            consonants.classList.add("xesada");
            consonantsCell.appendChild(consonants);
            let consonantsPronunciation = document.createElement("div");
            consonantsPronunciation.textContent = consonantConceptArray[consonantRowIndex * consonantArray.length / consonantRowArray.length + consonantIndex];
            consonantsPronunciation.classList.add("concept");
            consonantsCell.appendChild(consonantsPronunciation);
            consonantVerticalRow.appendChild(consonantsCell);
        }
        tbody.appendChild(consonantVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("suffix-consonant-table").appendChild(table);
}
function generateFirstCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "前置格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let vowelBacknessIndex = 0; vowelBacknessIndex < vowelBacknessArray.length; vowelBacknessIndex++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelBacknessArray[vowelBacknessIndex] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let vowelRoundednessIndex = 0; vowelRoundednessIndex < vowelRoundednessArray.length; vowelRoundednessIndex++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelRoundednessArray[vowelRoundednessIndex] + "母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let vowelIndex = 0; vowelIndex < vowelArray.length / vowelRoundednessArray.length; vowelIndex++) {
            let vowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelArray[vowelRoundednessIndex * vowelArray.length / vowelRoundednessArray.length + vowelIndex] + "\u{25CC}\u{25CC}";
            vowels.classList.add("xesada");
            vowelCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelCaseArray[vowelRoundednessIndex * vowelArray.length / vowelRoundednessArray.length + vowelIndex] + "格";
            vowelsCase.classList.add("case");
            vowelCell.appendChild(vowelsCase);
            vowelsVerticalRow.appendChild(vowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("first-case-table").appendChild(table);
}
function generateSecondCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "後置格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let vowelBacknessIndex = 0; vowelBacknessIndex < vowelBacknessArray.length; vowelBacknessIndex++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelBacknessArray[vowelBacknessIndex] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let vowelRoundednessIndex = 0; vowelRoundednessIndex < vowelRoundednessArray.length; vowelRoundednessIndex++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelRoundednessArray[vowelRoundednessIndex] + "母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let vowelIndex = 0; vowelIndex < vowelArray.length / vowelRoundednessArray.length; vowelIndex++) {
            let vowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}\u{25CC}" + vowelArray[vowelRoundednessIndex * vowelArray.length / vowelRoundednessArray.length + vowelIndex] + "\u{25CC}";
            vowels.classList.add("xesada");
            vowelCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelCaseArray[vowelRoundednessIndex * vowelArray.length / vowelRoundednessArray.length + vowelIndex] + "格";
            vowelsCase.classList.add("case");
            vowelCell.appendChild(vowelsCase);
            vowelsVerticalRow.appendChild(vowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("second-case-table").appendChild(table);
}
function generateConjunctCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "複合格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    tr.appendChild(blank);
    for (let firstVowel = 0; firstVowel < vowelArray.length; firstVowel++) {
        let firstVowelCell = document.createElement("th");
        let firstVowelGlyph = document.createElement("div");
        firstVowelGlyph.textContent = "\u{25CC}" + vowelArray[firstVowel] + "\u{25CC}\u{25CC}";
        firstVowelGlyph.classList.add("xesada");
        firstVowelCell.appendChild(firstVowelGlyph);
        let firstVowelCase = document.createElement("div");
        firstVowelCase.textContent = vowelCaseArray[firstVowel] + "格";
        firstVowelCase.classList.add("case");
        firstVowelCell.appendChild(firstVowelCase);
        tr.appendChild(firstVowelCell);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let secondVowel = 0; secondVowel < vowelArray.length; secondVowel++) {
        let vowelRow = document.createElement("tr");
        let firstVowelCell = document.createElement("th");
        let firstVowelGlyph = document.createElement("div");
        firstVowelGlyph.textContent = "\u{25CC}\u{25CC}" + vowelArray[secondVowel] + "\u{25CC}";
        firstVowelGlyph.classList.add("xesada");
        firstVowelCell.appendChild(firstVowelGlyph);
        let firstVowelCase = document.createElement("div");
        firstVowelCase.textContent = vowelCaseArray[secondVowel] + "格";
        firstVowelCase.classList.add("case");
        firstVowelCell.appendChild(firstVowelCase);
        vowelRow.appendChild(firstVowelCell);
        for (let firstVowel = 0; firstVowel < vowelArray.length; firstVowel++) {
            let vowelsCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelArray[firstVowel] + "\u{25CC}" + vowelArray[secondVowel] + "\u{25CC}";
            vowels.classList.add("xesada");
            vowelsCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelCaseArray[firstVowel] + vowelCaseArray[secondVowel] + "格";
            vowelsCase.classList.add("case");
            vowelsCell.appendChild(vowelsCase);
            vowelRow.appendChild(vowelsCell);
        }
        tbody.appendChild(vowelRow);
    }
    table.appendChild(tbody);
    document.getElementById("conjunct-case-table").appendChild(table);
}
function generatePrefixCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接頭辞格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelBacknessArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelBacknessArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelRoundednessArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelRoundednessArray[i] + "母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelArray.length / vowelRoundednessArray.length; j++) {
            let vowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelArray[i * vowelArray.length / vowelRoundednessArray.length + j] + "\u{25CC}\u{25CC}\u{25CC}";
            vowels.classList.add("xesada");
            vowelCell.appendChild(vowels);
            let vowelsPartOfSpeech = document.createElement("div");
            vowelsPartOfSpeech.textContent = vowelCaseArray[i * vowelArray.length / vowelRoundednessArray.length + j] + "格";
            vowelsPartOfSpeech.classList.add("case");
            vowelCell.appendChild(vowelsPartOfSpeech);
            vowelsVerticalRow.appendChild(vowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("prefix-case-table").appendChild(table);
}
function generateSuffixCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接尾辞格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelBacknessArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelBacknessArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelRoundednessArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelRoundednessArray[i] + "母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelArray.length / vowelRoundednessArray.length; j++) {
            let vowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}\u{25CC}\u{25CC}\u{25CC}" + vowelArray[i * vowelArray.length / vowelRoundednessArray.length + j];
            vowels.classList.add("xesada");
            vowelCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelCaseArray[i * vowelArray.length / vowelRoundednessArray.length + j] + "格";
            vowelsCase.classList.add("case");
            vowelCell.appendChild(vowelsCase);
            vowelsVerticalRow.appendChild(vowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("suffix-case-table").appendChild(table);
}
function generatePartOfSpeechTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "品詞表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPartOfSpeechHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPartOfSpeechHorizontal.appendChild(blank);
    for (let i = 0; i < vowelPartOfSpeechHorizontalTypeArray.length; i++) {
        let vowelsPartOfSpeechHorizontalCell = document.createElement("th");
        vowelsPartOfSpeechHorizontalCell.textContent = vowelPartOfSpeechHorizontalTypeArray[i] + "符";
        vowelsPartOfSpeechHorizontal.appendChild(vowelsPartOfSpeechHorizontalCell);
    }
    thead.appendChild(vowelsPartOfSpeechHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelPartOfSpeechVerticalTypeArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = "文法" + vowelPartOfSpeechVerticalTypeArray[i];
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelArray.length / vowelPartOfSpeechVerticalTypeArray.length; j++) {
            let vowelsRow = document.createElement("td");
            let vowel = document.createElement("div");
            vowel.textContent = "\u{25CC}\u{25CC}\u{25CC}" + vowelArray[i * vowelArray.length / vowelRoundednessArray.length + j];
            vowel.classList.add("xesada");
            vowelsRow.appendChild(vowel);
            let vowelsPartOfSpeech = document.createElement("div");
            vowelsPartOfSpeech.textContent = vowelPartOfSpeechTypeArray[i * vowelArray.length / vowelRoundednessArray.length + j] + "詞";
            vowelsPartOfSpeech.classList.add("part-of-speech");
            vowelsRow.appendChild(vowelsPartOfSpeech);
            vowelsVerticalRow.appendChild(vowelsRow);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.getElementById("part-of-speech-table").appendChild(table);
}
function generateArticleConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "附詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let prefixIndex = 0; prefixIndex < middleTongueConsonantArray.length; prefixIndex++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}a" + middleTongueConsonantArray[prefixIndex];
        p.classList.add("xesada", "article-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTongueConceptArray[prefixIndex] + "形";
        p2.classList.add("article-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let prefixIndex = 0; prefixIndex < upperTongueConsonantArray.length; prefixIndex++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = upperTongueConsonantArray[prefixIndex] + "\u{25CC}\u{25CC}\u{25CC}a";
        p.classList.add("xesada", "article-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTongueConceptArray[prefixIndex] + "相";
        p2.classList.add("article-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let suffixIndex = 0; suffixIndex < middleTongueConsonantArray.length; suffixIndex++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("xesada", "article-conjugation-form-consonant");
            p.append(upperTongueConsonantArray[prefixIndex], "\u{25CC}\u{25CC}\u{25CC}a", middleTongueConsonantArray[suffixIndex]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(upperTongueConceptArray[prefixIndex] + "相", document.createElement("wbr"), middleTongueConceptArray[suffixIndex] + "形");
            p2.classList.add("article-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("article-conjugation-table").appendChild(table);
}
function generateVerbConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "動詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let prefixIndex = 0; prefixIndex < middleTongueConsonantArray.length; prefixIndex++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}e" + middleTongueConsonantArray[prefixIndex];
        p.classList.add("xesada", "verb-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTongueConceptArray[prefixIndex] + "形";
        p2.classList.add("verb-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let prefixIndex = 0; prefixIndex < lowerTongueConsonantArray.length; prefixIndex++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = lowerTongueConsonantArray[prefixIndex] + "\u{25CC}\u{25CC}\u{25CC}e";
        p.classList.add("xesada", "verb-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = lowerTongueConceptArray[prefixIndex] + "相";
        p2.classList.add("verb-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let suffixIndex = 0; suffixIndex < middleTongueConsonantArray.length; suffixIndex++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("xesada", "verb-conjugation-form-consonant");
            p.append(lowerTongueConsonantArray[prefixIndex], "\u{25CC}\u{25CC}\u{25CC}e", middleTongueConsonantArray[suffixIndex]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTongueConceptArray[prefixIndex] + "相", document.createElement("wbr"), middleTongueConceptArray[suffixIndex] + "形");
            p2.classList.add("verb-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("verb-conjugation-table").appendChild(table);
}
function generateAdjectiveConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "容詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let prefixIndex = 0; prefixIndex < upperTongueConsonantArray.length; prefixIndex++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}i" + upperTongueConsonantArray[prefixIndex];
        p.classList.add("xesada", "adjective-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTongueConceptArray[prefixIndex] + "形";
        p2.classList.add("adjective-tense");
        th.appendChild(p2);
        vowelsPronunciationHorizontalRow.appendChild(th);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let prefixIndex = 0; prefixIndex < lowerTongueConsonantArray.length; prefixIndex++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p2 = document.createElement("div");
        p2.textContent = lowerTongueConsonantArray[prefixIndex] + "\u{25CC}\u{25CC}\u{25CC}i";
        p2.classList.add("xesada", "adjective-aspect-consonant");
        th.appendChild(p2);
        let p3 = document.createElement("div");
        p3.textContent = lowerTongueConceptArray[prefixIndex] + "相";
        p3.classList.add("adjective-aspect");
        th.appendChild(p3);
        tr.appendChild(th);
        for (let suffixIndex = 0; suffixIndex < upperTongueConsonantArray.length; suffixIndex++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("xesada", "adjective-conjugation-form-consonant");
            p.append(lowerTongueConsonantArray[prefixIndex], "\u{25CC}\u{25CC}\u{25CC}i", upperTongueConsonantArray[suffixIndex]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTongueConceptArray[prefixIndex] + "相", document.createElement("wbr"), upperTongueConceptArray[suffixIndex] + "形");
            p2.classList.add("adjective-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("adjective-conjugation-table").appendChild(table);
}
function generateParticleConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "助詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let prefixIndex = 0; prefixIndex < middleTongueConsonantArray.length; prefixIndex++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}o" + middleTongueConsonantArray[prefixIndex];
        p.classList.add("xesada", "particle-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTongueConceptArray[prefixIndex] + "形";
        p2.classList.add("particle-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let prefixIndex = 0; prefixIndex < upperTongueConsonantArray.length; prefixIndex++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = upperTongueConsonantArray[prefixIndex] + "\u{25CC}\u{25CC}\u{25CC}o";
        p.classList.add("xesada", "particle-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTongueConceptArray[prefixIndex] + "相";
        p2.classList.add("particle-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let suffixIndex = 0; suffixIndex < middleTongueConsonantArray.length; suffixIndex++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("xesada", "particle-conjugation-form-consonant");
            p.append(upperTongueConsonantArray[prefixIndex], "\u{25CC}\u{25CC}\u{25CC}o", middleTongueConsonantArray[suffixIndex]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(upperTongueConceptArray[prefixIndex] + "相", document.createElement("wbr"), middleTongueConceptArray[suffixIndex] + "形");
            p2.classList.add("particle-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("particle-conjugation-table").appendChild(table);
}
function generateAdverbConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "副詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let i = 0; i < middleTongueConsonantArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}u" + middleTongueConsonantArray[i];
        p.classList.add("xesada", "adverb-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTongueConceptArray[i] + "形";
        p2.classList.add("adverb-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let prefixIndex = 0; prefixIndex < lowerTongueConsonantArray.length; prefixIndex++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = lowerTongueConsonantArray[prefixIndex] + "\u{25CC}\u{25CC}\u{25CC}u";
        p.classList.add("xesada", "adverb-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = lowerTongueConceptArray[prefixIndex] + "相";
        p2.classList.add("adverb-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let suffixIndex = 0; suffixIndex < middleTongueConsonantArray.length; suffixIndex++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("xesada", "adverb-conjugation-form-consonant");
            p.append(lowerTongueConsonantArray[prefixIndex], "\u{25CC}\u{25CC}\u{25CC}u", middleTongueConsonantArray[suffixIndex]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTongueConceptArray[prefixIndex] + "相", document.createElement("wbr"), middleTongueConceptArray[suffixIndex] + "形");
            p2.classList.add("adverb-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("adverb-conjugation-table").appendChild(table);
}
function generateNounConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "名詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let prefixIndex = 0; prefixIndex < upperTongueConsonantArray.length; prefixIndex++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}w" + upperTongueConsonantArray[prefixIndex];
        p.classList.add("xesada", "noun-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTongueConceptArray[prefixIndex] + "形";
        p2.classList.add("noun-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let prefixIndex = 0; prefixIndex < lowerTongueConsonantArray.length; prefixIndex++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = lowerTongueConsonantArray[prefixIndex] + "\u{25CC}\u{25CC}\u{25CC}w";
        p.classList.add("xesada", "noun-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = lowerTongueConceptArray[prefixIndex] + "相";
        p2.classList.add("noun-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let suffixIndex = 0; suffixIndex < upperTongueConsonantArray.length; suffixIndex++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("xesada", "noun-conjugation-form-consonant");
            p.append(lowerTongueConsonantArray[prefixIndex], "\u{25CC}\u{25CC}\u{25CC}w", upperTongueConsonantArray[suffixIndex]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTongueConceptArray[prefixIndex] + "相", document.createElement("wbr"), upperTongueConceptArray[suffixIndex] + "形");
            p2.classList.add("noun-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("noun-conjugation-table").appendChild(table);
}
window.addEventListener("load", () => {
    generateConsonantPronunciationTable();
    generateVowelPronunciationTable();
    generateConsonantConceptTable();
    generatePrefixConsonantTable();
    generateSuffixConsonantTable();
    generateFirstCaseTable();
    generateSecondCaseTable();
    generateConjunctCaseTable();
    generatePrefixCaseTable();
    generateSuffixCaseTable();
    generatePartOfSpeechTable();
    generateArticleConjugationTable();
    generateVerbConjugationTable();
    generateAdjectiveConjugationTable();
    generateParticleConjugationTable();
    generateAdverbConjugationTable();
    generateNounConjugationTable();
});