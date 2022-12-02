/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var slow = head;
    var fast = head;
    
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    slow = slow.next;    
    var { head: revSecondHalfHead } = recursiveReversive(slow);
    // printLinkedList(revSecondHalfHead);
    
    while (revSecondHalfHead) {
        if (head.val !== revSecondHalfHead.val) {
            return false;
        }
        head = head.next;
        revSecondHalfHead = revSecondHalfHead.next;
    }
    
    return true;
};

var recursiveReversive = (head) => {
    if (!head || !head.next) return { head: head, tail: head };
    
    var { head: newHead, tail: newTail } = recursiveReversive(head.next);
    newTail.next = head;
    head.next = null;
    
    return { head: newHead, tail: head }
}

// var printLinkedList = (head) => {
//     var output = '['
//     while (head) {
//         console.log('hurro');
//         output += head.val+',';
//         head = head.next;
//     }
//     output = output.substr(0, output.length-1) + ']';
//     console.log(output);
// }

/*
    recursiveReversive -> returns (oldHead, newHead)
    one node
        return (head, head)
    two nodes
        temp = head.next
        head.next.next = head
        head.next = null
        return (head, temp)
    more than two
        (oldHead, newHead) = recursiveReversive(head.next)
        head.next = null;
        oldHead.next = head
        return (head, newHead)
    reverse a linked list
    temp = head.next.next

    1,2,3,4
    stop - slow = 2, fast = 3
    reverse from slow.next
    
    1,2,3,4,5
    stop - slow = 3 fast = 5
    reverse from slow.next
    
    1 - return true
    
    1,2
    stop - slow = 1, fast = 2
    reverse from slow.next
*/