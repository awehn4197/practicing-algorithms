/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    
    var arr = [root.val];
    
    root.children.forEach(child => {
        arr.push(...preorder(child));
    });
    
    return arr;
};