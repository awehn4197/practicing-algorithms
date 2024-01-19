class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        min_val = float('inf')
        second_min_val = float('inf')
        for num in nums:
            if num <= min_val:
                min_val = num
            elif num <= second_min_val:
                second_min_val = num
            else:
                return True
        return False