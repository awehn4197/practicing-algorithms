class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        freq = defaultdict(int)
        res = 0
        
        for row in grid:
            freq[tuple(row)] += 1
                        
        for col in zip(*grid):
            res += freq[col]
        
        return res