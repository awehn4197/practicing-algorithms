class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 1
        last = nums[0]
        
        while i < len(nums):
            if nums[i] == last:
                nums.pop(i)
                continue
            else:
                last = nums[i]
                i += 1
                
        return len(nums)