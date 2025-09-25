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

    get mileage() {
        return this.#mileage;
    }

    set mileage(mileage) {
        this.#mileage = mileage;
    }


    info() {
        console.log(`Car: ${this.#mark}, model: ${this.#model}, mileage: ${this.#mileage}`);
    }
}
