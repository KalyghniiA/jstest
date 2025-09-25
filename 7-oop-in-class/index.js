"use strict";

class Person {
    #name;
    #race;
    #language;
    constructor(name, race, language) {
        this.#name = name;
        this.#race = race;
        this.#language = language;
    }

    speak() {
        console.log("speaking");
    }
}

class Orc extends Person {
    #weapon;
    constructor(name, race, language, weapon) {
        super(name, race, language);
        this.#weapon = weapon;
    }

    speak() {
        console.log("Wargh!!!");
    }

    hit() {
        console.log(`Hit ${this.#weapon}`)
    }
}

class Elf extends Person {
    #spell
    constructor(name, race, language, spell) {
        super(name, race, language);
        this.#spell = spell;
    }

    speak() {
        console.log("I`m elf");
    }

    cast() {
        console.log(`I\`m casting ${this.#spell}`);
    }
}