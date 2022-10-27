/**
 * @param {string} digits
 * @return {string[]}
 */

const phoneMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};

var letterCombinations = function(digits) {
    if (!digits) return [];
    var allPossibleCombinations = [''];
    [...digits].forEach(digit => {
        var newAllPossibleCombinations = [];
        const letters = phoneMap[digit];
        letters.forEach(letter => {
            allPossibleCombinations.forEach(combination => {
                newAllPossibleCombinations.push(combination+=letter);
            });
        });
        allPossibleCombinations = newAllPossibleCombinations;
    });
    return allPossibleCombinations;
};