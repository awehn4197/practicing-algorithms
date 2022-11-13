/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var sCharMap = new Map();
    var tCharMap = new Map();

    for (var i = 0; i < s.length; i++) {
        const sChar = s[i]; const tChar = t[i];
        
        const sEntryForSChar = sCharMap.get(sChar) || new Set();
        sEntryForSChar.add(tChar);
        sCharMap.set(sChar, sEntryForSChar);
        
        const tEntryForTChar = tCharMap.get(tChar) || new Set();
        tEntryForTChar.add(sChar);
        tCharMap.set(tChar, tEntryForTChar);
        
        if (sEntryForSChar.size > 1 || tEntryForTChar.size > 1) return false;
    }
    
    return true;
};