document.addEventListener("DOMContentLoaded", () => {
    const lastSection = document.querySelector("main section:last-of-type");
    if (!lastSection) {
        return;
    }
    const indexNodes = Array.from(
        document.querySelectorAll("main dfn")
    ).filter(index => !index.closest("nav h2"));
    if (indexNodes.length === 0) {
        return;
    }
    const index = document.createElement("nav");
    index.id = "navigation-index";
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "\u{7D22}\u{5F15}";
    sectionTitle.id = "index";
    index.appendChild(sectionTitle);
    const descriptionList = document.createElement("dl");
    index.appendChild(descriptionList);
    const indexes = new Map();
    indexNodes.forEach((index, indexNumber) => {
        const number = indexNumber + 1;
        if (!index.id) {
            index.id = "index-" + number;
        }
        const descriptionTermText = index.textContent.trim();
        if (!indexes.has(descriptionTermText)) {
            const descriptionTerm = document.createElement("dt");
            descriptionTerm.textContent = descriptionTermText;
            const descriptionDetails = document.createElement("dd");
            const superScript = document.createElement("sup");
            descriptionDetails.appendChild(superScript);
            descriptionList.appendChild(descriptionTerm);
            descriptionList.appendChild(descriptionDetails);
            indexes.set(descriptionTermText, superScript);
        }
        const superScript = indexes.get(descriptionTermText);
        if (superScript.childNodes.length > 0) {
            superScript.appendChild(document.createTextNode(", "));
        }
        const anchor = document.createElement("a");
        anchor.href = "#" + index.id;
        anchor.textContent = number;
        superScript.appendChild(anchor);
    });
    const beforeHorizontalRule = document.createElement("hr");
    const afterHorizontalRule = document.createElement("hr");
    lastSection.parentNode.insertBefore(beforeHorizontalRule, lastSection.nextSibling);
    lastSection.parentNode.insertBefore(index, beforeHorizontalRule.nextSibling);
    lastSection.parentNode.insertBefore(afterHorizontalRule, index.nextSibling);
});