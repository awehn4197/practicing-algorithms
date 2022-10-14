/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        }

        boolean allListsEmpty = true;
        PriorityQueue<Integer> minHeap = new PriorityQueue();
        
        for (ListNode list : lists) {
            allListsEmpty = allListsEmpty && (list == null);

            while (list != null) {
                minHeap.add(list.val);
                list = list.next;
            }
        }
        if (allListsEmpty) {
            return null;
        }
        
        ListNode returnNode = new ListNode(minHeap.poll());
        ListNode nextNode = returnNode;
        while (minHeap.peek() != null) {
            nextNode.next = new ListNode(minHeap.poll());
            nextNode = nextNode.next;
        }
        return returnNode;
    }
}