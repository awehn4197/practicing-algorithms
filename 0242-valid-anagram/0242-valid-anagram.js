/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var charHash = new Map();

    [...s].forEach(char => {
        var count = charHash.get(char) || 0;
        charHash.set(char, count+1);
    });

    [...t].forEach(char => {
        var count = charHash.get(char) || 0;
        charHash.set(char, count-1);
    });

    var iterator = charHash.values();
    var count = iterator.next();
    var allValuesZero = true;
    while (!count.done) {
        allValuesZero = allValuesZero && count.value === 0;
        count = iterator.next();
    }

    return allValuesZero;

    // return Array.from(charHash.values()).every(val => val === 0);

};