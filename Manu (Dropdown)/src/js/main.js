const btn = document.querySelector("button");
const backdrop = document.getElementById("backdrop");
const menu = document.getElementById("menu");
const body = document.querySelector("body");

btn.addEventListener("click", (e) => {
    backdrop.classList.toggle("bg-[rgba(36,25,25,0.2)]");
    btn.classList.toggle("ring-4");
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
    }
    menu.classList.toggle("invisible");
})
