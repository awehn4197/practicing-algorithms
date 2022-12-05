/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    var allTwoCharStrings = new Array(26);
    for (let i = 0; i < 26; i++) {
        allTwoCharStrings[i] = new Array(26);
        allTwoCharStrings[i].fill(0);
    }
    
    words.forEach(word => {
        var i = word.charCodeAt(0) - 'a'.charCodeAt(0);
        var j = word.charCodeAt(1) - 'a'.charCodeAt(0);
        allTwoCharStrings[i][j]++;
    });
    
    var pairs = 0;
    var center = 0;
    
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            var currVal = allTwoCharStrings[i][j];
            if (i === j) {
                pairs += Math.floor(currVal/2);
                center = center || currVal % 2;
            } else {
                var complVal = allTwoCharStrings[j][i];
                pairs += Math.min(currVal, complVal);
            }
            allTwoCharStrings[i][j] = 0;
        }
    }
    
    return 2*(pairs*2 + center);
};