const card = "4561-2612-1234-5464";

const isLuneCardValid = (card) => {
    card = card.replaceAll("-", "");
    if (card.length !== 16) {
        return false;
    }

    let sum = 0;

    for (let i = 0; i < card.length; i++) {
        if (!(i % 2)) {
            sum += Number((card[i] * 2 < 9 ? card[i] * 2 : card[i] * 2 - 9));
        } else {
            sum += Number(card[i]);
        }
    }

    return sum % 10 === 0;
}

console.log(isLuneCardValid(card))