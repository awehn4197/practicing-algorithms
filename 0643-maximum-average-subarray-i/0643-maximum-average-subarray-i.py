class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        curr_sum = max_sum = sum(nums[:k])
        for j in range(k, len(nums)):
            curr_sum = curr_sum - nums[j-k] + nums[j]
            max_sum = max(max_sum, curr_sum)            
        return max_sum/k
