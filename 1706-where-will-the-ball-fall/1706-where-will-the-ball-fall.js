/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    var results = new Array(n);
    
    // for (let i = 0; i < m; i++) {
    //     console.log(`[${grid[i]}]`);
    // }
    
    for (let i = 0; i < n; i++) {
        var x = 0; var y = i;
        while (x < m) {
            // console.log(`i: ${i}, x: ${x}, y:${y}`);
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
        
        // console.log(`y: ${y}, grid[x]: ${grid[x]}`);

    }
    return results;
};

/*
mark cells already visited - maybe not a good idea because we need to do multiple loops and this would drastically increase memory complexity

if cell value is 1 and (its right neighbor is -1 OR its x index+1 >= n), then mark -1 for that column
if cell value is -1 and (its left neighbor is 1 OR its x index-1 <=0) then mark -1 for that column

examine columns one at a time
follow the trajectory of the ball while (y < m)
if it gets stuck as per the above rule break the while loop
if y = m, set result[i] = x
else result[i] = -1
set result 

if cell is 1 and not the above exceptions, next cell is x+1, y+1
if cell is -1 and not the above exceptions, next cell is x-1, y-1
*/