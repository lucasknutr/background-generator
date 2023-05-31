let body = document.getElementById("gradient");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let h3 = document.querySelector("h3");

body.addEventListener("input", function() {
    body.style.background = "linear-gradient(" + "to right" + ", " + color1.value + ", " + color2.value + ")";

    h3.textContent = body.style.background;
})



