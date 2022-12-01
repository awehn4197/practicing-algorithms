/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // map each string to an array [stringWithCharactersSorted, originalString]
    var strsCopy = strs.map(str => [[...str].sort().join(''), str]).sort();
    
    var output = [];
    var nextGroup = [];
    
    for (let i = 0; i < strsCopy.length; i++) {
        if (i === 0) {
            nextGroup.push(strsCopy[i][1]);
        } else if (strsCopy[i-1][0] == strsCopy[i][0]) {
            nextGroup.push(strsCopy[i][1]);
        } else {
            output.push(nextGroup);
            nextGroup = [strsCopy[i][1]];
        }
    }
    
    if (nextGroup.length > 0) {
        output.push(nextGroup);
    }
    
    return output;
};