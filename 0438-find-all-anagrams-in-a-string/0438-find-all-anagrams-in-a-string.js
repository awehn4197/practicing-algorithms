/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var pCharCount = new Array(26).fill(0);
    var sCharCount = new Array(26).fill(0);
    
    var anagramIndices = [];
    
    const aCharCode = 'a'.charCodeAt(0);

    [...p].forEach(char => {
        pCharCount[char.charCodeAt(0)-aCharCode]++;
    });
    
    for (let i = 0; i < s.length; i++) {
        sCharCount[s.charCodeAt(i)-aCharCode]++;
                
        if (i >= p.length - 1) {
            if (arraysMatch(sCharCount, pCharCount)) {
                anagramIndices.push(i-(p.length-1));
            }
            
            sCharCount[s.charCodeAt(i-(p.length-1))-aCharCode]--;
        }
    }
    
    return anagramIndices;
};

var arraysMatch = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    
    var arraysAreEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        arraysAreEqual = arraysAreEqual && (arr1[i] === arr2[i]);
    }
    
    return arraysAreEqual;
}
