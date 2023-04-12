/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let asInt = 0;
    let isPositive = true;
    let index = 0;
    
    while (s.charAt(index) === ' ') {
        index++;
    }
    
    if (s.charAt(index) === '-') {
        isPositive = false;
        index++;
    } else if (s.charAt(index) === '+') {
        isPositive = true;
        index++;
    }
        
    while (s.charCodeAt(index) >= 48 && s.charCodeAt(index) <= 57) {
        let nextDigit = s.charCodeAt(index) - '0'.charCodeAt(0);
        asInt = 10*asInt + s.charCodeAt(index) - '0'.charCodeAt(0);
        index++;
    }
    
    const result = isPositive ? asInt : -1*asInt;
    
    const max = 2**31 - 1;
    const min = -(2**31);
    
    if (result < min) {
        return min;
    } else if (result > max) {
        return max;
    } else {
        return result;
    }
    
};