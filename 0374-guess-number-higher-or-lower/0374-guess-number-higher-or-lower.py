# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        res = -1
        lb = 1
        ub = n
        while res != 0:
            new_mid = (lb+ub)//2
            res = guess(new_mid)
            if res == -1:
                ub = new_mid
            elif res == 1:
                lb = new_mid+1
        return new_mid