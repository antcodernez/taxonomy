let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.left = - value * 1.2 + "px";
    mountain.style.top = - value * 0.1 + "px";
    road.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
});