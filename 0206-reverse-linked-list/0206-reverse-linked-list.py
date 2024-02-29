# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        
        prev_node = None
        curr_node = head
        next_node = head.next
        
        while next_node:
            next_next_node = next_node.next
            next_node.next = curr_node
            curr_node.next = prev_node
            prev_node = curr_node
            curr_node = next_node
            next_node = next_next_node
        
        return curr_node