window.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByTagName("main")[0];
    document.querySelector("form").addEventListener("click", (event) => {
        if (event.target.matches("input[type='button']")) {
            main.className = event.target.value;
        }
    });
});