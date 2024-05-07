/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    console.log('num: ', num)
    digits = num.toString().split('')
    if (digits.length === 1) {
        return parseInt(digits[0])
    } else {
        const nextNum = digits.reduce((acc, val) => acc + parseInt(val), 0)
        return addDigits(nextNum)
    }
    
};