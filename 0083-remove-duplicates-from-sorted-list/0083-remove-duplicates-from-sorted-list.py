# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        
        og_head = head
        nxt = head.next
        
        while nxt:
            if head.val == nxt.val:
                head.next = nxt.next
                nxt = head.next
            else:
                head = nxt
                nxt = nxt.next
                
        return og_head
        
        