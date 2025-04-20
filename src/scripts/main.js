function toggleTheme(){
    let currentTheme = localStorage.getItem("theme");

    currentTheme = currentTheme == "dark" ? "light" : "dark"

    setTheme(currentTheme)
}

function setTheme(theme){
    localStorage.setItem("theme", theme)

    document.documentElement.classList.toggle(
        "dark",
        theme === "dark" ? true : false,
    );

    document.querySelectorAll(".toggleTheme-icon").forEach((e) => {
        e.classList.add("hidden")
        e.classList.remove("inline")
    })

    let icon = theme.toLowerCase() == "dark" ? "light" : "dark";

    document.querySelector("#" + icon + "_mode").classList.remove("hidden")
    document.querySelector("#" + icon + "_mode").classList.add("inline")
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".toggleTheme").addEventListener("click", toggleTheme)

    let currentTheme = localStorage.getItem("theme");
    if(! currentTheme){
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    }
    setTheme(currentTheme)
});