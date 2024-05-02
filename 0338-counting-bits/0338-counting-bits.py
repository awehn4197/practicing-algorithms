class Solution:
    def countBits(self, n: int) -> List[int]:
        count = [0]
        for i in range(1, n+1):
            next_count = count[i >> 1] + i % 2
            count.append(next_count)
        return count