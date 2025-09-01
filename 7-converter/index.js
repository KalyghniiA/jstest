const main = (sum, currency, targetCurrency) => {
    const mainCurrencyValue = 1;

    const currenciesValues = [
        {
            currency: "USD",
            value: mainCurrencyValue
        },
        {
            currency: "EUR",
            value: mainCurrencyValue * 1.17
        },
        {
            currency: "RUB",
            value: mainCurrencyValue * 0.0124
        }
    ]
    if (!checkConvert(currency, targetCurrency, currenciesValues)) {
        return null;
    }

    if (targetCurrency === "USD") {
        return convert(sum, currency, currenciesValues);
    } else {
        const convertedValue = convert(sum, currency, currenciesValues);
        return convert(convertedValue, targetCurrency, currenciesValues);
    }
}

const checkAbilityConvert = (currency, currencies) => {
    for (const e of currencies) {
        if (e.currency === currency) {
            return true;
        }
    }
    return false;
}

const checkConvert = (firstCurrency, secondCurrency, currenciesDictionary) => {
    if (firstCurrency === secondCurrency) {
        console.log("Указаны одинаковые валюты");
        return false;
    }

    if (!checkAbilityConvert(firstCurrency, currenciesDictionary)) {
        console.log(checkAbilityConvert(firstCurrency, currenciesDictionary));
        console.log("Не поддерживается начальная валюта");
        return false;
    }

    if (!checkAbilityConvert(firstCurrency, currenciesDictionary)) {
        console.log("Не поддерживается конвертируемая валюта");
        return false;
    }

    return true;
}

const convert = (sum, currency, currencyDictionary) => {
    return currencyDictionary.filter(e => e.currency === currency)[0].value * sum;
}


main(1000, "RUB", "EUR");