/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minPrice = Infinity;
    var maxProfit = 0;
    
    prices.forEach(price => {
        if (price < minPrice) minPrice = price;
        if (price - minPrice > maxProfit) maxProfit = price - minPrice;
    });
    
    return maxProfit;
};