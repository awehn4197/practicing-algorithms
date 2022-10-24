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
    public void reverseSubList(ListNode sublistHead, int k) {
        int index = 0;
        ListNode currentNode = sublistHead;
        ListNode prevNode = null;
        ListNode nextNode = null;
        
        while (index < k) {
            
            // System.out.println("currentNode - pointer: " + currentNode + ", value: " + currentNode.val + ", next: " + currentNode.next);
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            
            prevNode = currentNode;
            currentNode = nextNode;
            index++;
        }
    }
    
    public ListNode reverseKGroup(ListNode head, int k) {
        
        ListNode lastSublistTail = null;
        ListNode nextSublistHead = null;
        
        ListNode ogSublistHead = head;
        ListNode ogSublistTail = head;
        
        ListNode returnHead = null;
        
        int index = 1;
        
        while (ogSublistTail != null) {
            // System.out.println("ogSublistTail - pointer: " + ogSublistTail + ", value: " + ogSublistTail.val + ", next: " + ogSublistTail.next);
            
            if (index == k) {
                nextSublistHead = ogSublistTail.next;
                
                reverseSubList(ogSublistHead, k);
                
                if (lastSublistTail == null) {
                    returnHead = ogSublistTail;
                } else {
                    lastSublistTail.next = ogSublistTail;
                } 
                
                ogSublistHead.next = nextSublistHead;
                lastSublistTail = ogSublistHead;
                ogSublistHead = nextSublistHead;
                ogSublistTail = nextSublistHead;
                
                index = 1;
            }
            if (ogSublistTail != null) {
                ogSublistTail = ogSublistTail.next;
                index++;
            }
        }
        
        return returnHead;
    }
    
}