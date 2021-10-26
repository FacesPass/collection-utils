"use strict";
exports.__esModule = true;
exports.randomNum = void 0;
function randomNum(min, max) {
    if (typeof min === 'string') {
        min = +min;
    }
    if (typeof max === 'string') {
        max = +max;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomNum = randomNum;
