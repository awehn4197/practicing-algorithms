import math

class Solution:
    def climbStairs(self, n: int) -> int:
        noSteps = n
        maxNoTwoSteps = noSteps // 2
        sum = 0
        for noTwoSteps in range(maxNoTwoSteps + 1):
            sum += math.factorial((noSteps - 2*noTwoSteps) + noTwoSteps)/(math.factorial(noSteps-2*noTwoSteps)*math.factorial(noTwoSteps))
        return int(sum)
        # if n <= 2:
        #     return n
        # dp = [0]*(n+1)
        # dp[1] = 1
        # dp[2] = 2
        # for i in range(3, n+1):
        #     dp[i] = dp[i-1] + dp[i-2]
        # return dp[n]