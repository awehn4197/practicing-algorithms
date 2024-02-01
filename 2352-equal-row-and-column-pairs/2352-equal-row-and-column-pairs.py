class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        n = len(grid)
        cross_product_set = set((i, j) for i in range(n) for j in range(n))
        # print(cross_product_set)
        for itr in range(n):
            pairs_to_remove = set()
            for (row, col) in cross_product_set:
                if grid[itr][col] != grid[row][itr]:
                    pairs_to_remove.add((row, col))
                    # cross_product_set.remove((row, col))
            cross_product_set -= pairs_to_remove
            # print(f'itr: {itr}, cross_product_set: {cross_product_set}')
        return len(cross_product_set)