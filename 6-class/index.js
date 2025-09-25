"use strict";

class Car {
    #mark
    #model
    #mileage
    constructor(mark, model, mileage) {
        this.#mark = mark;
        this.#model = model;
        this.#mileage = mileage;
    }

    get mark() {
        return this.#mark;
    }

    set mark(mark) {
        this.#mark = mark;
    }

    getInfo() {
        console.log(`Car: ${this.#mark}, model: ${this.#model}, mileage: ${this.#mileage}`);
    }
}
