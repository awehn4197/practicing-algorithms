/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    const listsOrderedAsc = (list1.val < list2.val) ? [list1, list2] : [list2, list1];
    
    const newHead = listsOrderedAsc[0];
    newHead.next = mergeTwoLists(listsOrderedAsc[0].next, listsOrderedAsc[1]);
    
    return newHead;
};