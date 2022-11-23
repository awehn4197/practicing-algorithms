/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var dp = new Array(cost.length);
    
    dp[cost.length-1] = cost[cost.length-1];
    dp[cost.length-2] = cost[cost.length-2];
    
    if (cost.length > 2) {
        let i = cost.length - 3;

        while (i >= 0) {
            dp[i] = cost[i]+Math.min(dp[i+1], dp[i+2]);
            i--;
        }
    }
    
    return Math.min(dp[0], dp[1]);
};