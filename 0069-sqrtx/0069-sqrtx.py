class Solution:
    def mySqrt(self, x: int) -> int:
        l = 0
        r = (x//2)+2
        while l < r:
            mid = (l+r)//2
            prod = mid * mid
            if (prod == x):
                return mid
            elif (prod > x):
                r = mid
            else:
                l = mid+1
        return r-1
        # for i in range((x//2)+2):
        #     prod = i*i
        #     if (prod == x):
        #         return i
        #     elif (prod > x):
        #         return i-1