/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = "";
    strs.sort((a,b) => a.length - b.length);
    for (var i=0; i < strs[0].length; i++) {
        var nextChar = [...strs[0]][i];
        if (strs.every(str => {
            return [...str][i] === nextChar;
        })) {
            prefix += nextChar;
        } else {
            return prefix;
        }
    }
    return prefix;
};