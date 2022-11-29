/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var commonPrefix = "";
    let i = 0;
    while (strs.every(str => str.length >= i)) {
        var nextChar = strs[0].charAt(i);
        if (strs.every(str => str.charAt(i) === nextChar)) {
            commonPrefix += nextChar;
        } else {
            return commonPrefix;
        }
        i++;
    }
    return commonPrefix;
};