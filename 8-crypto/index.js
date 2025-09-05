const crypto = (pass) => {
    const symbols = pass.split("");
    const leftReverse = symbols.slice(0, symbols.length / 2 ).reverse();
    const rightReverse = symbols.slice(symbols.length / 2, symbols.length).reverse();
    return leftReverse.concat(rightReverse).join("");
}

const check = (pass, cryptoPass) => {
    return pass === crypto(cryptoPass);
}

crypto("password");
check("password", "ssapdrow");