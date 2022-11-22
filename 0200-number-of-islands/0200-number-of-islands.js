/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    var islandCount = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                grid[i][j] = 0;
            
                var neighbors = [];
                neighbors.push([i, j]);
                
                while (neighbors.length > 0) {
                    var cell = neighbors.shift();
                    var r = cell[0]; var c = cell[1];
                    
                    if (r > 0 && grid[r-1][c] === '1') {
                        neighbors.push([r-1, c]);
                        grid[r-1][c] = '0';
                    }
                    
                    if (r < rows-1 && grid[r+1][c] === '1') {
                        neighbors.push([r+1, c]);
                        grid[r+1][c] = '0';
                    }
                    
                    if (c > 0 && grid[r][c-1] === '1') {
                        neighbors.push([r, c-1]);
                        grid[r][c-1] = '0';
                    }
                    
                    if (c < cols-1 && grid[r][c+1] === '1') {
                        neighbors.push([r, c+1]);
                        grid[r][c+1] = '0';
                    }
                }
                
            }
        }
    }
    
    return islandCount;
};