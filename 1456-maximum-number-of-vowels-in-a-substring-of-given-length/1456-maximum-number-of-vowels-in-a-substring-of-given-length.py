class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        maxCount = lastVal = self.countVowels(s[:k])
        for i in range(1, len(s)-k+1):
            currVal = lastVal - self.countVowels(s[i-1]) + self.countVowels(s[i+k-1])
            if currVal > maxCount:
                maxCount = currVal
            lastVal = currVal
        return maxCount
    
    def countVowels(self, s: str) -> int:
        vowels = { 'a', 'e', 'i', 'o', 'u'}
        count = 0
        for ch in s:
            if ch in vowels:
                count += 1
        return count
        
    