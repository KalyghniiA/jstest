"use strict";

const Character = function (race, name, language) {
    this.name = name;
    this.language = language;
    this.race = race;
}

Character.prototype.speak = function () {
    console.log(`${this.language} ${this.name}`);
}

const Orc = function (name, language, weapon) {
    Character.call(this, "orc", name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {console.log(`hit ${this.weapon}`)}

const Elf = function (name, language, typeSpell) {
    Character.call(this, "elf", name, language);
    this.typeSpell = typeSpell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.spell = function () {console.log("spell")}
Elf.prototype.createSpell = function () {
    console.log(`createSpell type ${this.typeSpell}`);
    this.spell();
}



