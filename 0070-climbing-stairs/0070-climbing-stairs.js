/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) return n;
    
    var series = new Array(n);
    series[0] = 1;
    series[1] = 2;
    
    for (let i = 2; i < n; i++) {
        series[i] = series[i-1]+series[i-2];
    }
    
    return series[n-1];
};