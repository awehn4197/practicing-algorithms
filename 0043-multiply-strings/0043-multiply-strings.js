/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var productMap = new Map();
    var remainder = 0;
    
    var iter = 0;
    for (let i = 0; i < num1.length; i++) {
        var num1Digit = num1.charAt((num1.length-1)-i) - '0';
        for (let j = 0; j < num2.length; j++) {
            var num2Digit = num2.charAt((num2.length-1)-j) - '0';
            var power = i+j;
            var sumAtPower = productMap.get(power) || 0;
            sumAtPower = sumAtPower + (num1Digit * num2Digit);
            productMap.set(power, sumAtPower);
            iter++;
        }
    }
        
    var backwardsProduct = '';

    var remainder = 0;
    Array.from(productMap.keys()).sort((a, b) => a - b).forEach(key => {
        var value = productMap.get(key);
        value += remainder;
        var nextDigit = value % 10;
        backwardsProduct += nextDigit;
        remainder = (value - nextDigit)/10;
    });
    
    
    while (remainder !== 0) {
        var nextDigit = remainder % 10;
        backwardsProduct += nextDigit;
        remainder = remainder - nextDigit;
    }
    
    var product = [...backwardsProduct].reverse().join('');
    while (product.charAt(0) === '0' && product.length > 1) {
        product = product.substring(1);
    }
    
    return product;
};