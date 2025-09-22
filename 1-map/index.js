"use strict";

const set = new Set([
    { id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 1, name: "Вася" },
])

const unique = (set) => {
    const arr = [];
    set.forEach(item => {
        if (arr.findIndex(elem => elem.id === item.id) === -1) arr.push(item);
    })

    return new Set(arr);
}

console.log(unique(set));