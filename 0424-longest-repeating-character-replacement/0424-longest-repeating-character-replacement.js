/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var low = 1;
    var high = s.length + 1;
        
    while (low + 1 < high) {
        var mid = Math.floor((low+high)/2);
        
        if (canMakeValidSubstring(s, mid, k)) {
            low = mid;
        } else {
            high = mid;
        }
    }
    
    return low;
};

var canMakeValidSubstring = (s, substringLength, k) => {
    var substring = s.substring(0, substringLength);
    var charCount = new Map();
    [...substring].forEach(character => {
        incrementCharCount(charCount, character, 1);
    });

    for (let i = 0; i < s.length-substringLength+1; i++) {
        if (i > 0) {
            var prevStartChar = s.charAt(i-1);
            incrementCharCount(charCount, prevStartChar, -1);

            var newEndChar = s.charAt(i+substringLength-1);
            incrementCharCount(charCount, newEndChar, 1);
        }

        var maxCharCount = Array.from(charCount.values()).sort((a,b) => b-a)[0];

        if (substringLength - maxCharCount <= k) {
            return true;
        }
    }
    
    return false;
}

var incrementCharCount = (charMap, character, incr) => {
    var countForChar = charMap.get(character) ? charMap.get(character) : 0;
    countForChar = countForChar + incr;
    if (countForChar < 0) countForChar = 0;
    charMap.set(character, countForChar);
}
