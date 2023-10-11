class Solution:
    def isPalindrome(self, x: int) -> bool:
        forwards = str(x)
        for index in range(0, len(forwards)//2):
            if (forwards[index] != forwards[(len(forwards) - 1) - index]):
                return False
        return True