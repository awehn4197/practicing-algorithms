/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;
    
    var nodesSeen = new Set();
    
    // var i?ndex = 0;
    nodesSeen.add(head);
    
    var next = head.next;
    
    while (next) {
        if (nodesSeen.has(next)) return next;
        nodesSeen.add(next);
        next = next.next;
    }
    
    return null;
};