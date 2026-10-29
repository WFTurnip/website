document.addEventListener("DOMContentLoaded", () => {
    const lastSection = document.querySelector("main section:last-of-type");
    const beforeHorizontalRule = document.createElement("hr");
    const afterHorizontalRule = document.createElement("hr");
    const index = document.createElement("section");
    index.id = "index";
    if (!lastSection) {
        return;
    }
    const h2 = document.createElement("h2");
    h2.textContent = "索引";
    index.appendChild(h2);
    const indexNodes = Array.from(document.querySelectorAll("main dfn")).filter(h => !h.closest("section#index h2"));
    if (indexNodes.length === 0) {
        return;
    }
    const baseLevel = Math.min(...indexNodes.map(h => parseInt(h.tagName[1])));
    const indexes = indexNodes.map((h, i) => {
        if (!h.id) {
            const slug = h.textContent.trim().toLowerCase().replace(/\W+/g, "-").replace(/^-+|-+$/g, "");
            h.id = slug || "index-" + i;
        }
        return {
            id: h.id,
            text: h.textContent.trim(),
            level: parseInt(h.tagName[1]) - baseLevel + 1
        };
    });
    const rootOl = document.createElement("ol");
    index.appendChild(rootOl);
    let stack = [{level: 0, ol: rootOl}];
    indexes.forEach(index => {
        while (index.level > stack[stack.length - 1].level + 1) {
            const parentOl = stack[stack.length - 1].ol;
            let lastLi = parentOl.lastElementChild;
            if (!lastLi) {
                lastLi = document.createElement("li");
                parentOl.appendChild(lastLi);
            }
            const childOl = document.createElement("ol");
            lastLi.appendChild(childOl);
            stack.push({
                level: stack[stack.length - 1].level + 1,
                ol: childOl
            });
        }
        while (index.level <= stack[stack.length - 1].level && stack.length > 1) {
            stack.pop();
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + index.id;
        a.textContent = index.text;
        li.appendChild(a);
        stack[stack.length - 1].ol.appendChild(li);
    });
    if (lastSection) {
        lastSection.parentNode.insertBefore(beforeHorizontalRule, lastSection.nextSibling);
        lastSection.parentNode.insertBefore(index, beforeHorizontalRule.nextSibling);
        lastSection.parentNode.insertBefore(afterHorizontalRule, index.nextSibling);
    }
});