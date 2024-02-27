import copy
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodes_visited = 1
        runner = head
        walker = head
        walker_minus_one = None
        while runner:
            # print('runner', runner.val)
            # print('walker', walker.val)
            runner = runner.next
            if nodes_visited % 2 == 0:
                walker_minus_one = walker
                walker = walker.next
            nodes_visited += 1
        if nodes_visited == 2:
            return None
        walker_minus_one.next = walker.next
        return head
        
