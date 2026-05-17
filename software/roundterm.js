window.addEventListener("DOMContentLoaded", () => {
    const text = "The quick brown fox jumps over the lazy dog.";
    let index = 0;
    const elements = document.querySelectorAll(".typing-text");
    /**
     * テキストを一文字ずつ表示するタイプライターエフェクトの関数
     */
    function typeEffect() {
        if (index < text.length) {
            elements.forEach(element => {
                element.textContent += text.charAt(index);
            });
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
});