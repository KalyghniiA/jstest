class Billing {
    amount;
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal () {
        return this.amount;
    }
}

class FixedBilling extends Billing {
    constructor(props) {
        super(props);
    }
}

class HourBilling extends Billing {
    #hour
    constructor(amount, hour) {
        super(amount);
        this.#hour = hour;
    }

    calculateTotal() {
        return this.#hour * this.amount;
    }
}

class ItemBilling extends Billing {
    #count

    constructor(amount, count) {
        super(amount);
        this.#count = count;
    }

    calculateTotal() {
        return this.amount * this.#count;
    }

}