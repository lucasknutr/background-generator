let body = document.getElementById("gradient");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let textArea = document.querySelector("#css-input");
let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");
let direction;

leftButton.addEventListener("click", function () {
    return direction = "to left";
})

rightButton.addEventListener("click", function () {
    return direction = "to right";
})


let side = function () {
    if (direction === "to left") {
        return "to left";
    }
    else {
        return "to right";
    }
}



body.addEventListener("input", function() {
    body.style.background = "linear-gradient(" + side() + ", " + color1.value + ", " + color2.value + ")";

    textArea.textContent = "background: " + body.style.background;
})



