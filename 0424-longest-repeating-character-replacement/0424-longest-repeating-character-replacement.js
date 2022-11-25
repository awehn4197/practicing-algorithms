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
        // console.log(`top low: ${low}, high: ${high}, mid: ${mid}`);
        
        if (canMakeValidSubstring(s, mid, k)) {
            low = mid;
        } else {
            high = mid;
        }
    }
    
    return low;
};

var canMakeValidSubstring = (s, substringLength, k) => {
    console.log(`substringLength: ${substringLength}, k: ${k}`);
    var substring = s.substring(0, substringLength);
    var charCount = new Map();
    [...substring].forEach(character => {
        incrementCharCount(charCount, character, 1);
    });

    for (let i = 0; i < s.length-substringLength+1; i++) {
        if (i > 0) {
            var prevStartChar = s.charAt(i-1);
            incrementCharCount(charCount, prevStartChar, -1);

            // console.log(`i+substringLength: ${i+substringLength}, s.length-1: ${s.length-1}`);
            var newEndChar = s.charAt(i+substringLength-1);
            incrementCharCount(charCount, newEndChar, 1);
        }

        var maxCharCount = Array.from(charCount.values()).sort((a,b) => b-a)[0];

        // console.log(`values: ${Array.from(charCount)}`);
        // console.log(`substringLength: ${substringLength}, maxCharCount: ${maxCharCount}, k: ${k}`);
        if (substringLength - maxCharCount <= k) {
            return true;
        }
    }
    
    return false;
}

var incrementCharCount = (charMap, character, incr) => {
    // console.log(`character: ${character}, incr: ${incr}`);
    var countForChar = charMap.get(character) ? charMap.get(character) : 0;
    countForChar = countForChar + incr;
    if (countForChar < 0) countForChar = 0;
    charMap.set(character, countForChar);
}

/* 

    this would be a good one for practicing typescript
    
    examine substrings
    start with longest substring (the whole string)
    
    
    s="ABCDEFGH" k=7 => 8
    if k >= s.length - 1, return s.length
    
    s="BBCDEFGH" k=6 => 8
    
    s="BBBDEFGH" k=5 => 8
    create a set from the substring
    if k >= set.size - 1
    return substring.length
    
    now, how do we reuse the set without having to recreate it for each substring?
    let's use a map instead (or could use a 26 index array)
    
    originally, instantiate the map as count of each character in the whole string
    next we examine substrings of length s.length-1
        decrease the count of whichever character was at substring.length
        then examine the next substring
            decrease the count of whichever character was at index i-1
            increase the count of whichever character is at i+substring.length-1
            
            
    maybe we should do a map from characters to arrays
    then each time we reset we can filter our any indices outside our substring's range
    storage is then O(s.length) - forgivable
    
    maybe we should just reinstantiate the map every time we change the substring length
    
    
    "AABABBA"
    1
    find the string with the most 
*/