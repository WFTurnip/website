document.addEventListener("DOMContentLoaded", () => {
    const allDetails = document.querySelectorAll("details");
    allDetails.forEach(details => {
        const summary = details.querySelector("summary");
        /**
         * `summary`のテキストを更新する関数
         */
        const updateText = () => {
            if (details.open) {
                summary.textContent = "閉";
            } else {
                summary.textContent = "開";
            }
        };
        details.addEventListener("toggle", updateText);
    });
});