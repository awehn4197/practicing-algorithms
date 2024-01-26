class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        temp = res = sum(nums[:k])
        for i in range(k, len(nums)):
            temp = temp - nums[i-k] + nums[i]
            if temp > res:
                res = temp
        return res / k
        # curr_window_sum = 0
        # for z in range(k):
        #     curr_window_sum += nums[z]
        # max_window_sum = curr_window_sum
        # i = 1; j = k
        # while j < len(nums):
        #     curr_window_sum -= nums[i-1]
        #     curr_window_sum += nums[j]
        #     max_window_sum = max(max_window_sum, curr_window_sum)
        #     i += 1
        #     j += 1
        # return max_window_sum / k
