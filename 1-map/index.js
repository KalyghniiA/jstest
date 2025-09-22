"use strict";

const set = new Set([
    { id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 1, name: "Вася" },
])

const unique = (set) => {
    const newArr = [];
    [...set].map(item => {
        if (!newArr.find(elem => elem.id === item.id)) newArr.push(item);
    });
    return newArr;
}

console.log(unique(set));