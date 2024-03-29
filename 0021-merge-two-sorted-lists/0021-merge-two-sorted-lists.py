# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        if (list1 == None and list2 == None):
            return None
        elif (list1 == None):
            return list2
        elif (list2 == None):
            return list1
        
        if (list2.val < list1.val):
            return self.mergeTwoLists(list2, list1)
        
        list1.next = self.mergeTwoLists(list1.next, list2)
        return list1