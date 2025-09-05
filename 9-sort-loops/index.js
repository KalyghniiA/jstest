const sort = (arr) => {
    const copy = arr.slice(0, arr.length);
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let isTrue = true;
        for (let j = 0; j < n - i; j++) {
            if (copy[j] > copy[j + 1]) {
                let tmp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = tmp;
                isTrue = false;
            }
        }
        if (isTrue) {
            break;
        }
    }
    return copy;
}


const arr =  [1, 40, -5, 10, 0]
console.log(sort(arr));