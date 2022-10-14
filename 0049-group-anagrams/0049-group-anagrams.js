/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var strsCopy = strs.slice();
    strsCopy.map((str, i) => {
        const sortedString = str.split('').sort().join('');
        strsCopy[i] = sortedString;
    });
    const strsCopyAsSet = new Set(strsCopy); // get unique letter combinations
    var output = [];
    strsCopyAsSet.forEach(str => {
        const matchingIndices = strsCopy.reduce((arr, nextString, index) => {
            if (nextString === str) {
                arr.push(index);
            }
            return arr;
        }, []);
        output.push(matchingIndices);
    });
    output.map((arr, i) => {
        arr.map((index, i) => {
            arr[i] = strs[index];
        });
    });
    return output;
};


/*
make a shallow copy of string array (this is to maintain an original array with the strings in original order)
treat each string as an array
sort each string in alphabetical order
use string equality to determine matching indices
reference original array for original strings to match
*/