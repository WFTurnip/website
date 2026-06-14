document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) {
        return;
    }
    const href = a.getAttribute("href");
    if (href === "#") {
        return;
    }
    const target = document.querySelector(href);
    if (!target) {
        return;
    }
    e.preventDefault();
    target.scrollIntoView({behavior: "smooth", block: "start"});
    let parent = target.parentElement;
    while (parent) {
        if (parent.tagName.toLowerCase() === "details") {
            parent.open = true;
        }
        parent = parent.parentElement;
    }
});