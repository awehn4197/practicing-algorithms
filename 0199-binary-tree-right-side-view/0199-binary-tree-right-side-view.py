# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return None
        
        level = [root]
        view = []
        while level:
            view.append(level[-1].val)
            level = [child for node in level for child in (node.left, node.right) if child]
        
        return view