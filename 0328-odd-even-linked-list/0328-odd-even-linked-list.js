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
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    const ogHead = head;
    var currNode = head;
    var lastOddNode = null;
    var evHead = null;
    var lastEv = null;
    
    while (currNode && currNode.next) {
        if (!evHead) {
            evHead = currNode.next;
            // evHead.next = null;
            lastEv = evHead;
        } else {
            lastEv.next = currNode.next;
            lastEv = lastEv.next;
        }
        
        currNode.next = currNode.next.next;
        lastOddNode = currNode;
        currNode = currNode.next;
    }
    
    lastOddNode = lastOddNode.next ? lastOddNode.next : lastOddNode;

    lastOddNode.next = evHead;
    lastEv.next = null;
    
    return ogHead;
};

/*
    relevant pointers
        - ogHead: the original head of the list (same as head of odd nodes list)
        - currNode: the current node from original list being examined
        - lastOddNode: the last odd node visited
        - evHead: the head of the even nodes list
        - lastEv: the most recently added node in the even nodes list
        
    initialization
        - ogHead = head
        - currNode = head
        - lastOddNode = null
        - evHead = null
        - lastEv = null
    
    surgical process
        - evHead initialized?
            - yes:
                lastEv.next = currNode.next
                lastEv = lastEv.next
                currNode.next = currNode.next.next
                lastOddNode = currNode
                currNode = currNode.next
            - no:
                evHead = currNode.next
                lastEv = evHead
                currNode.next = currNode.next.next
                lastOddNode = currNode
                currNode = currNode.next
        - when might this fail?
            if !currNode
            if !currNode.next
            assume currNode.next.next is null
                at the end of this process, currNode will be null
                how will we do surgery if we don't have the odd list's tail?
                    one more pointer - lastNode - i don't like this but i'm doing this til i think of a better way 
            assume currNode.next.next.next is null
                at the end of this process, currNode is defined, but currNode.next is null
                this is fine, in fact ideal
            
    while condition
        
    endings
        - if lastOddNode.next -> lastOddNode = lastOddNode.next
        - lastOddNode.next = evHead
        probably irrelevant now:
            - last node is odd
            - last node is even
        
    return
        - the original head of the list
        
    edge cases
        - empty list
            return head
        - one node
            return head
        - two nodes
            not really an edge case

*/