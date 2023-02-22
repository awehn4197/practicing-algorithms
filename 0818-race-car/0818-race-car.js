/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    var dp = Array.from({ length:10001 }).fill(-1);
    return (function helper(t) {
        if (dp[t] > 0) return dp[t];

        var n = Math.ceil((Math.log(t+1)/Math.log(2.0)));

        if (t === (1 << n) - 1) {
            dp[t] = n;
        } else {
            var res = helper((1 << n) - 1 - t);
            dp[t] = (n + 1) + res;
            for (let r = 0; r < n - 1; r++) {
                var contender = n + r + 1 + helper(t - ((1 << (n - 1)) - (1 << r)));
                dp[t] = Math.min(dp[t], contender);
            }
        }
        return dp[t];
    })(target)
};