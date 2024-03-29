from collections import Counter

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        rn_counter = Counter(ransomNote)
        mg_counter = Counter(magazine)
        
        for key, value in rn_counter.items():
            if mg_counter.get(key) is None or value > mg_counter.get(key):
                return False
        
        return True