export class Task {
    #mess;
    constructor(mess) {
        this.#mess = mess;
    }

    run() {
        console.log(this.#mess);
    }
}