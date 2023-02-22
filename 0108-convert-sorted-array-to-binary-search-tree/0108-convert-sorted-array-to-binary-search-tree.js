/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;

    var mid = Math.floor(nums.length/2);

    var left = sortedArrayToBST(nums.slice(0,mid));
    var right = sortedArrayToBST(nums.slice(mid+1))

    var head = new TreeNode(nums[mid], left, right);
    return head;
};