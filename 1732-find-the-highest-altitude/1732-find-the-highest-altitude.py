class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        max_alt = 0
        current = 0
        for i in range(len(gain)):
            current += gain[i]
            max_alt = max(max_alt, current)
        # for g in gain:
        #     current += g
        #     max_alt = max(max_alt, current)
        return max_alt