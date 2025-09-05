const convertViaUSD = (amount, fromCurrency, toCurrency, rates) => {
    if (!rates[fromCurrency]) {
        console.log(`Курс для валюты ${fromCurrency} не найден`);
        return null;
    }
    if (!rates[toCurrency]) {
        console.log(`Курс для валюты ${toCurrency} не найден`);
        return null;
    }

    const amountInUSD = amount * rates[fromCurrency];

    return amountInUSD / rates[toCurrency];
};

const main = (sum, currency, targetCurrency) => {
    const exchangeRates = {
        дол: 1,
        евр: 1.17,
        руб: 0.0124,
        // GBP: 1.38,
        // JPY: 0.0091
    };

    if (currency === targetCurrency) {
        return sum;
    }

    const convertedSum = convertViaUSD(sum, currency, targetCurrency, exchangeRates);
    if (convertedSum === null) {
        console.log("Ошибка при конвертации");
        return null;
    }
    return convertedSum;
};

main(1000, "руб", "евр");