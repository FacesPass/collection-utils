"use strict";
exports.__esModule = true;
exports.spliceThousand = void 0;
/**
 * 千分位转换
 */
function spliceThousand(number) {
    var str = '';
    var arr = number.toString().split('');
    var length = arr.length;
    while (length > 3) {
        str = "," + arr.splice(-3).join('') + str;
        length = arr.length;
    }
    return arr.join('') + str;
}
exports.spliceThousand = spliceThousand;
