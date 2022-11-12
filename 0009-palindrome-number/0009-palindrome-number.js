/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xAsString = x.toString();
    const digits = [...xAsString];
    var index = 0;
    while (index <= Math.floor(digits.length/2)) {
        if (digits[index] != digits[digits.length-1-index]) return false;
        index++;
    }
    return true;
};