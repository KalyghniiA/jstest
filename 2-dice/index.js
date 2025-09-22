const fling = (max) => {
    return Math.floor(Math.random() * max + 1);
}

const flingDice = (type) => {
    switch (type) {
        case "d4":
            return fling(4);
        case "d6":
            return fling(6);
        case "d8":
            return fling(8);
        case "d10":
            return fling(10);
        case "d12":
            return fling(12);
        case "d16":
            return fling(16);
        case "d20":
            return fling(20);
        default:
            return 0;
    }
}

console.log(flingDice("d20"))