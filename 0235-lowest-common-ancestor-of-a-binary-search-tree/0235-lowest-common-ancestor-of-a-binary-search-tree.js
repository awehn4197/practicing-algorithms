/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const { lowestCommonAncestor } = testAncestry(root, p, q);
    return lowestCommonAncestor;
};

var testAncestry = function(node, p, q) {
    var isParentOfP = false;
    var isParentOfQ = false;
    var lowestCommonAncestor = undefined;
    
    if (!node) return { isParentOfP, isParentOfQ, lowestCommonAncestor };
    
    const leftReport = testAncestry(node.left, p, q);
    const rightReport = testAncestry(node.right, p, q);
    
    isParentOfP = leftReport.isParentOfP || rightReport.isParentOfP || node === p;
    isParentOfQ = leftReport.isParentOfQ || rightReport.isParentOfQ || node === q;
    lowestCommonAncestor = leftReport.lowestCommonAncestor || rightReport.lowestCommonAncestor || (isParentOfP && isParentOfQ ? node : undefined);
    
    return { isParentOfP, isParentOfQ, lowestCommonAncestor };
}