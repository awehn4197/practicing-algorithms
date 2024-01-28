class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        nums1_set = set(nums1)
        nums2_set = set(nums2)
        
        return nums1_set - nums2_set, nums2_set - nums1_set
        
#         nums1_excl_nums2 = []
        
#         for num in nums1_set:
#             if num not in nums2_set:
#                 nums1_excl_nums2.append(num)
            
#         nums2_excl_nums1 = []
        
#         for num in nums2_set:
#             if num not in nums1_set:
#                 nums2_excl_nums1.append(num)
        
#         return (nums1_excl_nums2, nums2_excl_nums1)
        # return (nums1_set.difference(nums2_set), nums2_set.difference(nums1_set))