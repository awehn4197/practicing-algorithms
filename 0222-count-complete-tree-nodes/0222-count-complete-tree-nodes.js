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
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) {
        return 0
    }
    
    levels = 1
    leaves = 0
    
    dfs = (node, level) => {
        if (!node) {
            return
        }
        
        if (level > levels) {
            levels = level
            leaves = 0
        }
        
        if (level === levels) {
            leaves += 1
        }
        
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    
    dfs(root, 1)
    
    return (2**(levels-1)-1) + leaves
};