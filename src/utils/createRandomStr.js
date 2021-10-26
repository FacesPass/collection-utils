"use strict";
exports.__esModule = true;
exports.createRandomStr = void 0;
function createRandomStr(len) {
    if (typeof len === 'string') {
        len = +len;
    }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charsLen = chars.length;
    var randomStr = '';
    for (var i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * charsLen));
    }
    return randomStr;
}
exports.createRandomStr = createRandomStr;
