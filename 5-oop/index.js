"use strict";

const Character = function (race, name, language) {
    this.name = name;
    this.language = language;
    this.race = race;
}

Character.prototype.speak = function () {
    console.log(`${this.language} ${this.name}`);
}

const Orc = function (name, language) {
    Character.call(this, "orc", name, language);
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {console.log("hit")}
Orc.prototype.spell = function () {console.log("spell")}
Orc.prototype.createSpell = function () {
    console.log("createSpell");
    this.spell();
}


const orc = new Orc("jack", "ru");
console.log(orc);
orc.speak();
orc.createSpell()

