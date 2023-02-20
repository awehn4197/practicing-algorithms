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
var zigzagLevelOrder = function(root) {
    let queue = [[root, 0]];
    let result = [];
    
    while (queue.length) {
        let [nextNode, level] = queue.shift();
        
        if (!nextNode) continue;
        
        if (level === result.length) {
            result.push([]);
        }
        
        if (level % 2 === 0) {
            result[result.length-1].push(nextNode.val);
        } else {
            result[result.length-1].unshift(nextNode.val);
        }
        
        queue.push([nextNode.left, level + 1]);
        queue.push([nextNode.right, level + 1]);
    }
    
    return result;
};