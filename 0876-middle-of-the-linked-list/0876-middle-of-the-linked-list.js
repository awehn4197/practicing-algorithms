/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var middleNode = head;
    var tailNode = head;
    var iteration = 1;
    
    while (tailNode) {
        tailNode = tailNode.next;
        if (iteration % 2 === 0) {
            middleNode = middleNode.next;
        }
        iteration++;
    }
    
    return middleNode;
};