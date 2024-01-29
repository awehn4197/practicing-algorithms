class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = right = 0
        max_window_length = 0
        zeros_in_window = 0
        
        while (right < len(nums)):
            zeros_in_window += 1 - nums[right]
            
            while zeros_in_window > k:
                zeros_in_window -= 1 - nums[left]
                left += 1
                
            if right - left + 1 > max_window_length:
                max_window_length = right - left + 1
                
            right += 1
        
        return max_window_length