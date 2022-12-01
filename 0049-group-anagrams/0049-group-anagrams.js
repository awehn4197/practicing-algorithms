/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // map each string to an array [stringWithCharactersSorted, originalString]
    var strsCopy = strs.map(str => [[...str].sort().join(''), str]).sort();
        
    var anagramToIndices = new Map();
    strsCopy.forEach(elem => {
        var indices = anagramToIndices.get(elem[0]) || [];
        indices.push(elem[1]);
        anagramToIndices.set(elem[0], indices);
    });
    
    return [...anagramToIndices].map(entry => entry[1].flat())
};