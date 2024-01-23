class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        last_zero_index = len(nums)
        for i in range(len(nums)-1,-1,-1):
            # print(nums)
            if nums[i] == 0:
                # print(f"i: {i}, nums[i]: {nums[i]}")
                j = i
                while j < last_zero_index-1:
                    nums[j], nums[j+1] = nums[j+1], nums[j]
                    j += 1
                last_zero_index -= 1