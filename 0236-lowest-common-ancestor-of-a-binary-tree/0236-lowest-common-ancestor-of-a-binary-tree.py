# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        stack = [root]
        parent_dict = {root: None}
        while stack:
            _next = stack.pop()
            if _next.left:
                parent_dict[_next.left] = _next
                stack.append(_next.left)
            if _next.right:
                parent_dict[_next.right] = _next
                stack.append(_next.right)

        ancestors = set()
        while p:
            ancestors.add(p)
            p = parent_dict[p]
            

        while q not in ancestors:
            ancestors.add(q)
            q = parent_dict[q]

        return q
            