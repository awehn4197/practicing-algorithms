class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        if len(word1) == 0:
            return word2
        else:
            return word1[0] + self.mergeAlternately(word2, word1[1:])