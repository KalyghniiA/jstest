"use strict";

const arr = [
    { id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 1, name: "Вася" },
];

const unique = (arr) => {
    const set = new Set();
    arr.forEach(elem => {
            const {id} = elem;
            set.add(id);
        });
    return [...set].map(id => arr.find(elem => elem.id === id));
}

console.log(unique(arr));