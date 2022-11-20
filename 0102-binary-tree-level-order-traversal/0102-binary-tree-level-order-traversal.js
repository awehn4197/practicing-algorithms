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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    var nodesLOT = [];
    var currentLevel = [root];
    
    while (currentLevel.length > 0) {
        nodesLOT.push(currentLevel.map(node => node.val));

        var nextLevel = [];
        currentLevel.forEach(node => {
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        });
        
        currentLevel = nextLevel;
    }
    
    return nodesLOT
};