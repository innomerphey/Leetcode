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
var middleNode = function (head) {
    let length = 1
    let node = head

    while (node.next !== null) {
        node = node.next
        length++
    }

    const midIndex = Math.floor(length / 2)


    let midNode = head

    for (let i = 0; i < midIndex; i++) {
        midNode = midNode.next
    }

    return midNode
};
