const crypto = (pass) => {
    const symbols = pass.split("");
    const leftReverse = symbols.slice(0, symbols.length / 2 ).reverse();
    const rightReverseStart = symbols.slice(symbols.length / 2, symbols.length).reverse();
    let rightReverse;
    if (rightReverseStart.length > 1) {
        const indexStart = rightReverseStart.length / 2 - 1;
        const indexEnd = rightReverseStart.length / 2;
        const left = rightReverseStart.slice(0, indexStart + 1);
        const right = rightReverseStart.slice(indexEnd);
        left[left.length - 1] = rightReverseStart[indexEnd];
        right[0] = rightReverseStart[indexStart];
        rightReverse = left.concat(right);
    } else {
        rightReverse = rightReverseStart;
    }
    return leftReverse.concat(rightReverse).join("");
}

const check = (cryptoPass, pass) => {
    return crypto(cryptoPass) === pass;
}

console.log(crypto("password"));
console.log(check("password", "ssapdorw"));