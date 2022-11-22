/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    var currColor = image[sr][sc];
    if (currColor === color) return image;
    
    dfs(image, sr, sc, currColor, color);
    
    // console.log(`final image: ${image}`);

    return image;
};

var dfs = function(image, r, c, color, newColor) {
        // console.log('hi2');

    if (image[r][c] === color) {
            // console.log('hi3');

        // console.log(`image b4 change: ${image}`);
        image[r][c] = newColor;
        // console.log(`image bAfter change: ${image}`);
        // console.log();
        
        if (r >= 1) dfs(image, r-1, c, color, newColor);
        if (c >= 1) dfs(image, r, c-1, color, newColor);
        if (r < image.length-1) dfs(image, r+1, c, color, newColor);
        if (c < image[0].length-1) dfs(image, r, c+1, color, newColor);
    }
}