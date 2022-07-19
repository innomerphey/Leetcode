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

    if(!head.next) {
        return null
    }

    let firstPointer = head
    let secondPointer = head

    for(let i = 0; i < n; i++) {
        secondPointer = secondPointer.next
    }

    if(!secondPointer) {
        head = head.next

        return head
    }


    while(secondPointer.next) {
        secondPointer = secondPointer.next
        firstPointer = firstPointer.next
    }

    console.log(firstPointer, secondPointer)

    firstPointer.next = firstPointer.next.next

    return head
};
