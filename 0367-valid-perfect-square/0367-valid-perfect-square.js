/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) {
        return true
    }
    let left = 0
    let right = num/2
    let mid
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        // console.log(`left: ${left}, right: ${right}, mid: ${mid}`)
        square = mid * mid
        if (square === num) {
            return true
        }
        if (square < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
};