document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.querySelector("main h1");
    if (!mainTitle) {
        return;
    }
    const headingNodes = Array.from(
        document.querySelectorAll("main h2, main h3, main h4, main h5, main h6")
    ).filter(heading => !heading.closest("nav h2"));
    if (headingNodes.length === 0) {
        return;
    }
    const tableOfContents = document.createElement("nav");
    tableOfContents.id = "navigation-header";
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "\u{76EE}\u{6B21}";
    sectionTitle.id = "table-of-contents";
    tableOfContents.appendChild(sectionTitle);
    const baseLevel = Math.min(...headingNodes.map(heading => parseInt(heading.tagName[1])));
    const headings = new Map();
    headingNodes.forEach((heading, indexNumber) => {
        if (!heading.id) {
            heading.id = "heading-" + indexNumber;
        }
        headings.set(heading, {
            id: heading.id,
            text: heading.textContent.trim(),
            level: parseInt(heading.tagName[1]) - baseLevel + 1
        });
    });
    const rootOrderedList = document.createElement("ol");
    tableOfContents.appendChild(rootOrderedList);
    let stack = [{nestLevel: 0, orderedList: rootOrderedList}];
    headings.forEach(heading => {
        while (heading.level > stack[stack.length - 1].nestLevel + 1) {
            const parentOrderedList = stack[stack.length - 1].orderedList;
            let lastListItem = parentOrderedList.lastElementChild;
            if (!lastListItem) {
                lastListItem = document.createElement("li");
                parentOrderedList.appendChild(lastListItem);
            }
            const childOrderedList = document.createElement("ol");
            lastListItem.appendChild(childOrderedList);
            stack.push({
                nestLevel: stack[stack.length - 1].nestLevel + 1,
                orderedList: childOrderedList
            });
        }
        while (heading.level <= stack[stack.length - 1].nestLevel && stack.length > 1) {
            stack.pop();
        }
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = "#" + heading.id;
        anchor.textContent = heading.text;
        listItem.appendChild(anchor);
        stack[stack.length - 1].orderedList.appendChild(listItem);
    });
    const beforeHorizontalRule = document.createElement("hr");
    const afterHorizontalRule = document.createElement("hr");
    if (mainTitle) {
        mainTitle.parentNode.insertBefore(beforeHorizontalRule, mainTitle.nextSibling);
        mainTitle.parentNode.insertBefore(tableOfContents, beforeHorizontalRule.nextSibling);
        mainTitle.parentNode.insertBefore(afterHorizontalRule, tableOfContents.nextSibling);
    }
});