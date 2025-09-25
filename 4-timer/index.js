"use strict";

const timerContainer = document.querySelector(".timer");
const newYearDate = new Date(2026, 0, 1);

setInterval(() => {
    const residual = newYearDate - Date.now();
    const seconds = Math.floor(residual / 1000 % 60);
    const minutes = Math.floor(residual /1000 / 60 % 60);
    const hours = Math.floor(residual / 1000 / 60 / 60 % 24);
    const days = Math.floor(residual / 1000 / 60 / 60 / 24 % 30);
    const months = Math.floor(residual / 1000 / 60 / 60 / 24 / 30);

    timerContainer.innerText = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
}, 1000)