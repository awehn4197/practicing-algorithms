/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xAsString = x.toString();
    const xAsStringReversed = [...xAsString].reverse().join('');
    return xAsString === xAsStringReversed;
};