class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        left = right = 0
        max_subarray_size = 0
        zeros_in_window = 0
        while (right < len(nums)):
            zeros_in_window += 1 - nums[right]
            
            while (zeros_in_window > 1):
                zeros_in_window -= 1 - nums[left]
                left += 1
            
            curr_subarray_size = right - left
            
            if curr_subarray_size > max_subarray_size:
                max_subarray_size = curr_subarray_size
            
            right += 1
        
        return max_subarray_size