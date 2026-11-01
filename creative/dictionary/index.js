document.addEventListener("DOMContentLoaded", () => {
    const lastSection = document.querySelector("main section:last-of-type");
    if (!lastSection) {
        return;
    }
    const indexNodes = Array.from(
        document.querySelectorAll("main dfn")
    ).filter(node => !node.closest("#index"));
    if (indexNodes.length === 0) {
        return;
    }
    const index = document.createElement("section");
    index.id = "index";
    const h2 = document.createElement("h2");
    h2.textContent = "\u{7D22}\u{5F15}";
    index.appendChild(h2);
    const dl = document.createElement("dl");
    index.appendChild(dl);
    const indexes = new Map();
    indexNodes.forEach((node, i) => {
        const number = i + 1;
        if (!node.id) {
            node.id = "index-" + number;
        }
        const text = node.textContent.trim();
        if (!indexes.has(text)) {
            const dt = document.createElement("dt");
            dt.textContent = text;
            const dd = document.createElement("dd");
            const sup = document.createElement("sup");
            dd.appendChild(sup);
            dl.appendChild(dt);
            dl.appendChild(dd);
            indexes.set(text, sup);
        }
        const sup = indexes.get(text);
        if (sup.childNodes.length > 0) {
            sup.appendChild(document.createTextNode(", "));
        }
        const a = document.createElement("a");
        a.href = "#" + node.id;
        a.textContent = number;
        sup.appendChild(a);
    });
    const beforeHorizontalRule = document.createElement("hr");
    const afterHorizontalRule = document.createElement("hr");
    lastSection.parentNode.insertBefore(
        beforeHorizontalRule,
        lastSection.nextSibling
    );
    lastSection.parentNode.insertBefore(
        index,
        beforeHorizontalRule.nextSibling
    );
    lastSection.parentNode.insertBefore(
        afterHorizontalRule,
        index.nextSibling
    );
});