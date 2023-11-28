class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s)-1
        
        while s[i] == " ":
            i -= 1
        lastCharIndex = i
        
        while s[i] != " " and i >= 0:
            i -= 1
        firstCharIndex = i+1
        
        return lastCharIndex - firstCharIndex + 1