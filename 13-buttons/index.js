"use strict";

const buttonsContainer = document.querySelector(".buttons");
let count = 0;

const clickToButton = function (event) {
    if (event.target.classList.value === "button") {
        let activeButton = event.target.getAttribute("btn-id");
        buttonsContainer.innerHTML = "";
        createButtons(activeButton);
        document.querySelector(".counter").innerText = ++count;
    }
}

const createButtons = (active) => {

    for (let i = 0; i < 5; i++) {
        const btn = document.createElement("button");
        btn.classList.add("button");
        btn.setAttribute("btn-id", i);
        if (active !== undefined && Number.parseInt(active) === i) {
            btn.classList.add("button--active");
            btn.innerText = "Нажата!";
        } else {
            btn.innerText = "Нажми меня";
        }
        buttonsContainer.appendChild(btn);
    }
}

buttonsContainer.addEventListener("click", clickToButton);

createButtons();