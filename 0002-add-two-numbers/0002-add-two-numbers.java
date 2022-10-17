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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode nextL1Node = l1;
        ListNode nextL2Node = l2;
        
        ArrayList<Integer> l1Arr = new ArrayList<Integer>();
        ArrayList<Integer> l2Arr = new ArrayList<Integer>();

        
        while (nextL1Node != null || nextL2Node != null) {
            int nextL1Val = (nextL1Node != null) ? nextL1Node.val : 0;
            int nextL2Val = (nextL2Node != null) ? nextL2Node.val : 0;

            l1Arr.add(nextL1Val);
            l2Arr.add(nextL2Val);
            
            nextL1Node = (nextL1Node != null) ? nextL1Node.next : null;
            nextL2Node = (nextL2Node != null) ? nextL2Node.next : null;
        }
        
        Collections.reverse(l1Arr);
        Collections.reverse(l2Arr);
        
        if (l1Arr.size() != l2Arr.size()) {
            System.out.println("oops");
        }
        
        ArrayList<Integer> sumArr = new ArrayList<Integer>();
        for (int i = 0; i < l1Arr.size(); i++) {
            sumArr.add(0);
        }
    
        int carryOver = 0;
        int counter = 0;
        
        for (int i = l1Arr.size() - 1; i >= 0; i--) {
            int sum = l1Arr.get(i) + l2Arr.get(i) + carryOver;
            if (sum > 9) {
                carryOver = 1;
                sumArr.set(i, sum - 10);
            } else {
                carryOver = 0;
                sumArr.set(i, sum);
            }
        }
        
        if (carryOver > 0) {
            sumArr.add(0, 1);
        }
                
        ListNode resultStartNode = new ListNode(sumArr.get(sumArr.size() - 1));
        ListNode resultNextNode = resultStartNode;
        
        int resultIndex = sumArr.size() - 2;
        
        while (resultIndex >= 0) {
            resultNextNode.next = new ListNode(sumArr.get(resultIndex));
            resultNextNode = resultNextNode.next;
            resultIndex--;
        }
        
        return resultStartNode;
    }
}