/**
 * メールアドレスをJavaScriptで組み立てることで、スパムボットから保護するためのコード
 */
window.addEventListener("DOMContentLoaded", () => {
    const user = "tomohiro.kabura";
    const domain = "icloud.com";
    const email = user + "@" + domain;
    const link = document.getElementById("emailLink");
    link.href = "mailto:" + email;
});