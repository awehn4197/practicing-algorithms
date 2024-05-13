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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = []
    const dfs = (node, currPath) => {
        if (!node) {
            return;
        }
        
        if (currPath.length !== 0) {
            currPath += '->'
        }
        
        currPath += node.val
        
        if (!node.left && !node.right) {
            paths.push(currPath)
        } else {
            dfs(node.left, currPath);
            dfs(node.right, currPath);
        }
    }
    
    dfs(root, '')
    
    return paths;
};