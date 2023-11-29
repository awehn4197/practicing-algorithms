class Solution:
    def mySqrt(self, x: int) -> int:
        for i in range((x//2)+2):
            prod = i*i
            if (prod == x):
                return i
            elif (prod > x):
                return i-1