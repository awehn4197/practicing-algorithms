/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    var anagramMap = new Map();
    
    for (str of strs) {
        var sortedStr = str.split('').sort().join('');
        var anagrams = anagramMap.get(sortedStr) || [];
        anagrams.push(str);
        anagramMap.set(sortedStr, anagrams);
    }
    
    return Array.from(anagramMap.values());
};