/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const segments = Math.ceil(arr.length / size)
    let chunkedArray = []
    for (let i = 0; i < segments; i++) {
        chunkedArray.push(arr.slice(i*size, (i+1)*size))
    }
    return chunkedArray
};
