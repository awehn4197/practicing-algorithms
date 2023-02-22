/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var dict = new Map();

    [...s].forEach((ch, idx) => {
        var val = dict.get(ch) ?? [0, Infinity];
        dict.set(ch, [val[0]+1, idx]);
    });

    var singleCountSorted = Array.from(dict.values()).filter(val => val[0] === 1).sort((val1, val2) => val1-val2);

    return singleCountSorted.length ? singleCountSorted[0][1] : -1;
};