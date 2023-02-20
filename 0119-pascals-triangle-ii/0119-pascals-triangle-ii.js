/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = [[1], [1,1]];
    for (let i = 2; i <= rowIndex; i++) {
        let thisRow = [1];
        for (let j = 0; j < i-1; j++) {
            thisRow.push(triangle[i-1][j]+triangle[i-1][j+1]);
        }
        thisRow.push(1);
        triangle.push(thisRow);
    }
    return triangle[rowIndex];
};