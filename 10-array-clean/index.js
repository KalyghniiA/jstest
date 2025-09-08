const arrayClean = (arr, fn) => {
    const newArr = [];
    for (let elem of arr) {
        if (!fn(elem)) newArr.push(elem);
    }
    return newArr;
}


const arr = [1, 2, 3, 4, 4, 2, 3, 5];

console.log(arrayClean(arr, (elem) => elem === 2));
console.log(arrayClean(arr, (elem) => elem === 4));
console.log(arrayClean(arr, (elem) => elem > 2));