# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        if not root:
            return 0
        
        def dfs(node, curr_branch_max):
            if not node:
                return 0
            count = 0
            if curr_branch_max <= node.val:
                count += 1
                curr_branch_max = node.val
            count += dfs(node.left, curr_branch_max) + dfs(node.right, curr_branch_max)
            # print(f'current node: {node.val}, curr max: {curr_branch_max}')
            # print(f'current count: {count}')
            return count
        
        return dfs(root, root.val)