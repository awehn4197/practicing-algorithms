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
    public ListNode rotateRight(ListNode head, int k) {
        System.out.println("k: " + k);
        ListNode nextNode = head;
        ListNode newTail = head;
        ListNode newHead = null;
        int currentIndex = 0;
        
        if (head == null || head.next == null || k == 0) { // rotating a single element does nothing to the order, so return original, or rotating 0 places does nothing
            return head;
        }
        
        while (nextNode != null) {
            int nextNodeVal = (nextNode != null) ? nextNode.val : -1;
            int newTailVal = (newTail != null) ? newTail.val : -1;
            System.out.println("currentIndex: " + currentIndex + ", nextNodeVal: " + nextNodeVal + ", newTailVal: " + newTailVal);
            
            if (nextNode.next == null) {
                if (k <= currentIndex) {
                    newHead = (newTail.next != null) ? newTail.next : head;
                    newTail.next = null;
                    nextNode.next = head;
                    return newHead;
                } else { // make k smaller than listSize by reducing to modulo listSize and recall function recursively
                    int listSize = currentIndex + 1;
                    k = k % listSize;
                    // int newTailIndex = (listSize - k) - 1;
                    return rotateRight(head, k);
                }
            }
            
            if (currentIndex > k - 1) {
                System.out.println("currentIndex: " + currentIndex + ", k: " + k);
                newTail = newTail.next;
            }
            
            currentIndex++;
            nextNode = nextNode.next;
        }
        
        return newHead;

    }
}