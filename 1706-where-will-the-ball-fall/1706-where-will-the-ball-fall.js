/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    var results = new Array(n);
    
    for (let i = 0; i < n; i++) {
        var x = 0; var y = i;
        while (x < m) {
            if (grid[x][y] === 1) {
               if (y+1 < n && grid[x][y+1] !== -1) {
                    x++; y++;
               } else {
                   break;
               }
            } else if (grid[x][y] === -1) {
                if (y-1 >= 0 && grid[x][y-1] !== 1) {
                    x++; y--;
                } else {
                    break;
                }
            }
        }
        if (x >= m) {
            results[i] = y;
        } else {
            results[i] = -1;
        }
    }
    return results;
};