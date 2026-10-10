document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("main h1");
    const hrBefore = document.createElement("hr");
    const hrAfter = document.createElement("hr");
    const nav = document.createElement("nav");
    if (!h1) {
        return;
    }
    const h2 = document.createElement("h2");
    h2.textContent = "目次";
    nav.appendChild(h2);
    const headingNodes = Array.from(document.querySelectorAll("main h2, main h3, main h4, main h5, main h6")).filter(h => !h.closest("nav h2"));
    if (headingNodes.length === 0) {
        return;
    }
    const baseLevel = Math.min(...headingNodes.map(h => parseInt(h.tagName[1])));
    const headings = headingNodes.map((h, i) => {
        if (!h.id) {
            const slug = h.textContent.trim().toLowerCase().replace(/\W+/g, "-").replace(/^-+|-+$/g, "");
            h.id = slug || "heading-" + i;
        }
        return {
            id: h.id,
            text: h.textContent.trim(),
            level: parseInt(h.tagName[1]) - baseLevel + 1
        };
    });
    const rootOl = document.createElement("ol");
    nav.appendChild(rootOl);
    let stack = [{level: 0, ol: rootOl}];
    headings.forEach(h => {
        while (h.level > stack[stack.length - 1].level + 1) {
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
        while (h.level <= stack[stack.length - 1].level && stack.length > 1) {
            stack.pop();
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.text;
        li.appendChild(a);
        stack[stack.length - 1].ol.appendChild(li);
    });
    if (h1) {
        h1.parentNode.insertBefore(hrBefore, h1.nextSibling);
        h1.parentNode.insertBefore(nav, hrBefore.nextSibling);
        h1.parentNode.insertBefore(hrAfter, nav.nextSibling);
    }
});