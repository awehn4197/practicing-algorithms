class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) == len(t):
            return s == t
        
        for i in range(len(t)):
            j = i
            sub_index = 0
            while j < len(t) and sub_index < len(s):
                if s[sub_index] == t[j]:
                    sub_index += 1
                j += 1
            if sub_index == len(s):
                return True
        return False