/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var substringLength = s.length;
    while (substringLength > 0) {
        const numberOfPositions = (s.length - substringLength) + 1;
        var index = 0;
        while (index < numberOfPositions) {
            const substring = s.substring(index, index + substringLength);
            if (checkIfPalindrome(substring)) {
                return substring;
            }
            index++;
        }
        substringLength--;
    }
    // never gets here
    return;
};

var checkIfPalindrome = function(s) {
    var lowIndex = Math.floor(s.length/2);
    while (lowIndex >= 0) {
        if ( s.charAt(lowIndex) !== s.charAt((s.length-1)-lowIndex)) {
            return false;
        }
        lowIndex--;
    }
    return true;
}