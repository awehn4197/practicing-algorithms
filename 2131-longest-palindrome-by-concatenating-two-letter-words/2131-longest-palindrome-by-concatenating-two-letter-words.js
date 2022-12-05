/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    
    var strCount = new Map();
    words.forEach(word => {
        var key = [...word].sort().join('');
        var val = strCount.get(key) || { fw: 0, bw: 0, isSymmetric: isStringSymmetric(word) };
        areLettersAscending(word) ? val.fw++ : val.bw++;
        strCount.set(key, val);
    });
    
    var pairs = 0;
    var centerpiece = false;
    Array.from(strCount.values()).forEach(val => {
        if (val.isSymmetric) {
            pairs += Math.floor(val.bw/2);
            centerpiece = centerpiece || val.bw%2 !== 0;
        } else {
            pairs += Math.min(val.fw, val.bw);;
        }
    });
    
    centerpiece = centerpiece ? 1 : 0;
    return 2*(pairs*2 + centerpiece);
};

var areLettersAscending = (str) => {
    return str.charCodeAt(1) - str.charCodeAt(0) > 0;
}

var isStringSymmetric = (str) => {
    return str.charAt(0) === str.charAt(1);
}