class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zero_bunch_size = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[i], nums[i-zero_bunch_size] = nums[i-zero_bunch_size], nums[i]
            else:
                zero_bunch_size += 1