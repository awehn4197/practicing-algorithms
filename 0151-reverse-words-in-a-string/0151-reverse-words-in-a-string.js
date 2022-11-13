/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").filter(substr => substr.length > 0).reverse().join(" ");
};