/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const aRef = 'A'.charCodeAt(0);
    let columnTitle = '';
    while (columnNumber !== 0) {
        let mod26 = (columnNumber - 1) % 26;
        let nextChar = String.fromCharCode(aRef + mod26);
        columnTitle = nextChar + columnTitle;
        columnNumber = parseInt((columnNumber - mod26)/26);
    }
    return columnTitle;
};