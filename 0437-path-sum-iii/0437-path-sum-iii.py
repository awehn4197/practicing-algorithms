# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import defaultdict 

class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        if not root:
            return 0
        
        self.res = 0
        self.targetSum = targetSum
        
        self.sums_dict = defaultdict(int)
        self.sums_dict[0] = 1
        
        curr_sum = 0
        
        self.dfs(root, curr_sum)
        
        return self.res
    
    def dfs(self, node, curr_sum):
        if not node:
            return
        
        curr_sum += node.val
        lookup = curr_sum - self.targetSum
        
        self.res += self.sums_dict[lookup]
        
        self.sums_dict[curr_sum] += 1
        
        self.dfs(node.left, curr_sum)
        self.dfs(node.right, curr_sum)
        
        self.sums_dict[curr_sum] -= 1
        

        
#         def dfs(node, curr_branch_sum, prev_branch_sums):
#             if not node:
#                 return 0
            
#             count = 0

#             if (curr_branch_sum - targetSum) in prev_branch_sums:
#                 count += 1
                
#             # if node.val == targetSum and len(prev_branch_sums) > 1:
#             #     count += 1
            
#             # curr_branch_sum = curr_branch_sum + node.val
#             # prev_branch_sums.append(curr_branch_sum)
            
#             print(f'val: {node.val}, cbs: {curr_branch_sum}, target diff: {curr_branch_sum - targetSum}')
#             print(f'prev_branch_sums: {prev_branch_sums}')
            
#             if node.left:
#                 count += dfs(node.left, curr_branch_sum + node.left.val, prev_branch_sums + [node.left.val])
#             if node.right:
#                 count += dfs(node.right, curr_branch_sum + node.right.val, prev_branch_sums + [node.right.val])
            
#             return count
        
        # return dfs(root, root.val, {0})