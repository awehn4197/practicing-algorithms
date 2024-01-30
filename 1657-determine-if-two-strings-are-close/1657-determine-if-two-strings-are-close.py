class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        w1_letter_count = Counter(word1)
        w2_letter_count = Counter(word2)
        return w1_letter_count.keys() == w2_letter_count.keys() and Counter(w1_letter_count.values()) == Counter(w2_letter_count.values())