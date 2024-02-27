# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        
        oddHead = oddTail = head
        evenHead = evenTail = oddTail.next
        
        while evenTail and evenTail.next:
            oddTail.next = evenTail.next
            evenTail.next = evenTail.next.next
            oddTail.next.next = evenHead
            oddTail = oddTail.next
            evenTail = evenTail.next
            
        return head