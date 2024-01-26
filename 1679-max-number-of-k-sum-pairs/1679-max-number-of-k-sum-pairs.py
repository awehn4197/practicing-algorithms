class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        i = 0; j = len(nums)-1;
        op_count = 0
        while i < j:
            sum = nums[i] + nums[j]
            if sum == k:
                op_count += 1
                i += 1
                j -= 1
            elif sum < k:
                i += 1
            else: 
                j -= 1
        return op_count