const date = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

const parseDate = (date) => {
    return date
        .filter(elem => Date.parse(elem) > 0)
        .map(elem => {
            if (elem.includes("/")) {
                const date = new Date(elem);
                return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
            }
            return elem;
        });
}

console.log(parseDate(date))