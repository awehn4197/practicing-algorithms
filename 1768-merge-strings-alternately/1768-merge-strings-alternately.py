class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        return self.mergeAlternatelyWithItr(word1, word2, 0)
        
        
    def mergeAlternatelyWithItr(self, word1: str, word2: str, itr: int) -> str:
        idx = itr // 2
        if len(word1[idx:]) == 0:
            return word2[idx:]
        else:
            return word1[idx] + self.mergeAlternately(word2[idx:], word1[idx+1:])
        