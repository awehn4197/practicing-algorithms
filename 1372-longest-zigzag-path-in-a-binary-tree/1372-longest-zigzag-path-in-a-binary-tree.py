# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.max_path_length = 0
        
        # there are always at least one node
        # therefore if we initialize at -1
        # dfs will find 0 as the max
        self.dfs(root, -1, None)
        
        return self.max_path_length
    
    def dfs(self, node, curr_path_length, prev_zag):
        # the previous node was a leaf
        # therefore this length is under consideration
        # as possibly being a max path length
        if not node:
            self.max_path_length = max(self.max_path_length, curr_path_length)
            return
        
        # increment because visiting
        curr_path_length += 1
        
        # handles the root node
        # since it's the initial node both left and right are "zaggy"
        if not prev_zag:
            self.dfs(node.left, curr_path_length, 'left')
            self.dfs(node.right, curr_path_length, 'right')
            
        # arrived at this node by visiting the left node
        # therefore only the right child is "zaggy"
        # reset left child and continue streak with right
        elif prev_zag == 'left':
            self.dfs(node.left, 0, 'left')
            self.dfs(node.right, curr_path_length, 'right')
            
        # arrived at this node by visiting the right node
        # therefore only the left child is "zaggy"
        # reset right child and continue streak with left
        elif prev_zag == 'right':
            self.dfs(node.left, curr_path_length, 'left')
            self.dfs(node.right, 0, 'right')