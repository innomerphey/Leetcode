/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return null
    }

    if(!root.left) {
        return root
    }

    root.left.next = root.right

    function connectNodes(r) {
        if(!r.left) {
            return
        }

        r.left.next = r.right

        if (r.next) {
            r.right.next = r.next.left
        }

        connectNodes(r.left)
        connectNodes(r.right)
    }

    connectNodes(root.left)
    connectNodes(root.right)

    return root
};
