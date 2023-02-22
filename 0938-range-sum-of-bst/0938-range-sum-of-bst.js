/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    var sum = 0;
    (function inOrderTrav(root) {
        if (!root) return;
        inOrderTrav(root.left);
        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }
        inOrderTrav(root.right);
    })(root);
    return sum;
};