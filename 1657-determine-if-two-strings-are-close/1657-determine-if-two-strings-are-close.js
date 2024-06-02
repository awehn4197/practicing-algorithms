/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    
    if (word1.length !== word2.length) {
        return false
    }
    
    const offset = 97;
    const count1 = Array(26).fill(0);
    const count2 = Array(26).fill(0);
    
    for (let i = 0; i < word1.length; i++) {
        count1[word1.charCodeAt(i)-offset]++
        count2[word2.charCodeAt(i)-offset]++
    }
    
    for (let i = 0; i < count1.length; i++) {
        if (count1[i] === 0 && count2[i] > 0) {
            return false
        }
        if (count2[i] === 0 && count1[i] > 0) {
            return false
        }
    }
    
    count1.sort()
    count2.sort()
    for (let i = 0; i < count1.length; i++) {
        if (count1[i] !== count2[i]) {
            return false
        }
    }
    
    return true
};