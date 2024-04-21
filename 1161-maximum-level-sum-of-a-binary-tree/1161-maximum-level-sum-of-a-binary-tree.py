# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        minLevel_maxSum = (0, -float('inf'))
        curr_level = [root]
        curr_depth = 1
        while curr_level:
            curr_sum = sum(map(lambda x: x.val, curr_level))
            if curr_sum > minLevel_maxSum[1]:
                minLevel_maxSum = (curr_depth, curr_sum)
            curr_level = [child for node in curr_level for child in (node.left, node.right) if child]
            curr_depth += 1
        return minLevel_maxSum[0]