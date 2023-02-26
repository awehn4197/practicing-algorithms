/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    // after (numRows + (numRows - 2)) characters, the zigzag pattern starts over
    const radix = (numRows + (numRows - 2));
    let charsByRow = new Array(numRows).fill('');
    
    [...s].forEach((ch, index) => {
        let relativeIndex = index % radix;
        if (relativeIndex < numRows) {
            charsByRow[relativeIndex] += ch;
        } else {
            let complIndex = radix - relativeIndex;
            charsByRow[complIndex] += ch;
        }
    });
    
    return charsByRow.reduce((acc, next) => acc += next, '');
    
};