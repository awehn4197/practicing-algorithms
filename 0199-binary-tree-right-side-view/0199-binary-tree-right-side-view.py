# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        def collect(node, level):
            if not node:
                return
            
            if len(visited) == level:
                visited.append(node.val)
            collect(node.right, level+1)
            collect(node.left, level+1)
        
        visited = []
        collect(root, 0)
        return visited