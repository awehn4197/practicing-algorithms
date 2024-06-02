/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }
    
    let w1Dict = new Map()
    
    for (let i=0; i < word1.length; i++) {
        let ch = word1[i]
        let chCount = w1Dict.get(ch) ?? 0
        w1Dict.set(ch, chCount+1)
    }
    
    let w2Dict = new Map()
    
    for (let i=0; i < word2.length; i++) {
        let ch = word2[i]
        let chCount = w2Dict.get(ch) ?? 0
        w2Dict.set(ch, chCount+1)
    }
    
    w1Set = new Set(w1Dict.keys())
    w2Set = new Set(w2Dict.keys())
    
    if (w1Set.size !== w2Set.size) {
        return false
    }
    
    for (let w1Ch of w1Set) {
        if (!w2Set.has(w1Ch)) {
            return false
        }
    }
    
    // Check that counts are the same
    // as long as the two strings are composed of the same characters
    // and there are the same number of characters to map to then
    // they are close
    const w1Counts = Array.from(w1Dict.values()).sort((a, b) => b-a)
    const w2Counts = Array.from(w2Dict.values()).sort((a, b) => b-a)
    for (let i = 0; i < w1Counts.length; i++) {
        if (w1Counts[i] !== w2Counts[i]) {
            return false
        }
    }
    
    return true
};