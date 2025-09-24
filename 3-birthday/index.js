"use strict";

const validation = (birthday) =>  new Date(birthday) < new Date().setFullYear(new Date().getFullYear() - 14);

