"use strict";

const validation = (birthday) =>  {
    return new Date(birthday) < new Date(new Date().setTime((new Date().setFullYear(new Date().getFullYear() - 14)) ));

}

console.log(validation("2011-09-24"))