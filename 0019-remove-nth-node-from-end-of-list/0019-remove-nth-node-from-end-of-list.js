/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var backupHead = head;
    var primaryPointer = head;
    var secondaryPointer = null; // should be n+1 behind primary so we can do surgery correctly
    var iter = 1;
    
    while (primaryPointer.next) {
        primaryPointer = primaryPointer.next;
        if (iter === n) {
            secondaryPointer = head;
        }
        if (iter >= n+1) {
            secondaryPointer = secondaryPointer.next;
        }
        iter++;
    }
    
    // if (iter < 1) return null;
    
    if (!secondaryPointer) {
        backupHead = backupHead.next;
    } else {
        secondaryPointer.next = secondaryPointer.next.next;
    }
    
    // console.log(`iter: ${iter}, primaryPointer: ${primaryPointer.val}, secondaryPointer: ${secondaryPointer.val}`)
    
    
    return backupHead;
};

/*
    possibilities:
        1. iterate the whole list, counting the number m of nodes visited until next is null
        then reiterate until you've traversed m-n nodes
        2. (faster) delayed start pointer to keep track of whichever node is n behind the main pointer
            start the main pointer, increasing iter = 1 with each move
            once iter = n, start the secondary pointer

*/