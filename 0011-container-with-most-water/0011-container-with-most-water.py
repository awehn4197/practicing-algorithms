class Solution:
    def maxArea(self, height: List[int]) -> int:
        i, j = 0, len(height) - 1
        max_vol = (j-i)*min(height[i], height[j])
        while i < j:
            if height[i] > height[j]:
                j -= 1
            else:
                i += 1
            max_vol = max(max_vol, (j-i)*min(height[i], height[j]))
        return max_vol