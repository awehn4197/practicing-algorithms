class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        curr_sum = max_sum = sum(nums[:k])
        j = k
        while j < len(nums):
            curr_sum -= nums[j - k]
            curr_sum += nums[j]
            max_sum = max(max_sum, curr_sum)
            j += 1
            
        return max_sum/k
