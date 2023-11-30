import math

factorial_dict = {
    1: 1,
    2: 2
}

def get_factorial(z):
    lookup = factorial_dict.get(z)
    if lookup:
        return lookup
    else:
        f = math.factorial(z)
        factorial_dict[z] = f
        return f    

class Solution:
    def climbStairs(self, n: int) -> int:
        noSteps = n
        maxNoTwoSteps = noSteps // 2
        sum = 0
        for noTwoSteps in range(maxNoTwoSteps + 1):
            sum += get_factorial((noSteps - 2*noTwoSteps) + noTwoSteps)/(get_factorial(noSteps-2*noTwoSteps)*get_factorial(noTwoSteps))
        return int(sum)
        # if n <= 2:
        #     return n
        # dp = [0]*(n+1)
        # dp[1] = 1
        # dp[2] = 2
        # for i in range(3, n+1):
        #     dp[i] = dp[i-1] + dp[i-2]
        # return dp[n]