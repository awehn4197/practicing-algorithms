/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var grid = new Array(m).fill(0).map(() => new Array(n));
    
    for (let i = 0; i < m*n; i++) {
        var r = Math.floor(i/n);
        var c = i%n;
        // console.log(`r: ${r}, c: ${c}`);
        if (r === 0 || c === 0) {
            grid[r][c] = 1;
        } else {
            grid[r][c] = grid[r-1][c] + grid[r][c-1];
        }
    }
    
    return grid[m-1][n-1];
};