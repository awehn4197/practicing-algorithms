# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        def DFS(node, depth):
            if not node:
                return
            
            if depth == len(sums):
                sums.append(node.val)
            else:
                sums[depth] += node.val
            
            DFS(node.left, depth + 1)
            DFS(node.right, depth + 1)
        
        sums = []
        DFS(root, 0)
        
        return 1 + sums.index(max(sums))