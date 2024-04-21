# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        level = [root]
        result = []
        while level:
            result.append(level[-1].val)
            level = [kid for node in level for kid in (node.left, node.right) if kid]
        return result