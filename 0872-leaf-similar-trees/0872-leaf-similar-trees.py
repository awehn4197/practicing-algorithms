# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        
#         def dfs_in_order(node1):
#             if not node1:
#                 return []
#             res = dfs_in_order(node1.left) + [node1.val] + dfs_in_order(node1.right)
#             return res
        
#         def dfs_pre_order(node1):
#             if not node1:
#                 return []
#             res = [node1.val] + dfs_pre_order(node1.left) + dfs_pre_order(node1.right)
#             return res
        
#         def dfs_post_order(node1):
#             if not node1:
#                 return []
#             res = dfs_post_order(node1.left) + dfs_post_order(node1.right) + [node1.val]
#             return res
        
#         def bfs(node1):
#             queue = [node1]
#             res = []
#             while queue:
#                 next_node = queue.pop()
#                 if not next_node:
#                     continue
#                 else:
#                     res.append(next_node.val)
#                 queue.insert(0, next_node.left)
#                 queue.insert(0, next_node.right)
#             return res

        def dfs_get_leaves(node1):
            if not node1:
                return []
            
            if not (node1.left or node1.right):
                return [node1.val]
            else:
                return dfs_get_leaves(node1.left) + dfs_get_leaves(node1.right)
        
        # def bfs_get_leaves(node1):
        #     queue = [node1]
        #     leaves = []
        #     res = []
        #     while queue:
        #         next_node = queue.pop()
        #         if not next_node:
        #             continue
        #         else:
        #             res.append(next_node.val)
        #         if not (next_node.left or next_node.right):
        #             leaves.append(next_node.val)
        #             continue
        #         queue.insert(0, next_node.left)
        #         queue.insert(0, next_node.right)
        #     return leaves
        
        
        r1_leaves = dfs_get_leaves(root1)
        # print(f'root1 leaves: {r1_leaves}')
        
        r2_leaves = dfs_get_leaves(root2)
        # print(f'root2 leaves: {r2_leaves}')

        return r1_leaves == r2_leaves
    
        # print()
                
            
        
        # print(dfs_post_order(root1))
        # print(dfs_pre_order(root1))
        # print(dfs_in_order(root1))
        # print(bfs(root1))
