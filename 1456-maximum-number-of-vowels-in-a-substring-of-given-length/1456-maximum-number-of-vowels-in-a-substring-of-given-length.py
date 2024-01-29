class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = "aeiou"
        maxCount = lastVal = sum([x in vowels for x in s[:k]])
        for i in range(1, len(s)-k+1):
            currVal = lastVal - (s[i-1] in vowels) + (s[i+k-1] in vowels)
            if currVal > maxCount:
                maxCount = currVal
            lastVal = currVal
        return maxCount
        
    