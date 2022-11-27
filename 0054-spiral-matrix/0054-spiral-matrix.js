/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    
    var digits = [];
    
    // 0 - right, 1 - down, 2 - left, 3 - up
    var direction = 0;
    var index = 0;
    var x = 0; var y = 0;
    
    while (index < m*n) {
        if (direction === 0) {
            if (!validCoordinates(matrix, x, y)) {
                direction++;
                x++; y--;
                continue;
            }
            digits.push(matrix[x][y]);
            matrix[x][y] = 101;
            y++;
            index++;
        }
        if (direction === 1) {
            if (!validCoordinates(matrix, x, y)) {
                direction++;
                x--; y--;
                continue;
            }
            digits.push(matrix[x][y]);
            matrix[x][y] = 101;
            x++;
            index++;
        }
        if (direction === 2) {
            if (!validCoordinates(matrix, x, y)) {
                direction++;
                x--; y++;
                continue;
            }
            digits.push(matrix[x][y]);
            matrix[x][y] = 101
            y--;
            index++;
        }
        if (direction === 3) {
            if (!validCoordinates(matrix, x, y)) {
                direction++;
                x++; y++;
                continue;
            }
            digits.push(matrix[x][y]);
            matrix[x][y] = 101;
            x--;
            index++;
        }
        direction = direction % 4;
    }
    
    return digits;
    
};

var validCoordinates = (matrix, x, y) => {
    if (matrix[x] !== undefined) {
        if (matrix[x][y] !== undefined) {
            if (matrix[x][y] !== 101) {
                return true;
            }
        }
    }
    return false;
}
