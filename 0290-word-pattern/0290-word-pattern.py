from collections import Counter

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        p = pattern
        t = s.split()
        return list(map(p.find, p)) == list(map(t.index, t))