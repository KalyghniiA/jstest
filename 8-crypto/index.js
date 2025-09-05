const toCrypto = (pass) => {
    const symbols = pass.split("");
    const leftReverse = symbols.slice(0, symbols.length / 2 ).reverse();
    const rightReverse = symbols.slice(symbols.length / 2, symbols.length).reverse();
    return leftReverse.concat(rightReverse).join("");
}

const checkEqualsPassword = (pass, cryptoPass) => {
    return pass === toCrypto(cryptoPass);
}

toCrypto("password");
checkEqualsPassword("password", "ssapdrow");