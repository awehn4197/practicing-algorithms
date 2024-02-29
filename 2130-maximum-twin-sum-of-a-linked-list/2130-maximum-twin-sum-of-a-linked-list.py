# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        ll_as_list = []
        while head:
            ll_as_list.append(head.val)
            head = head.next
        
        max_sum = 0
        n = len(ll_as_list)
        for i in range(0, n//2):
            max_sum = max(max_sum, ll_as_list[i]+ll_as_list[n-1-i])
            
        return max_sum