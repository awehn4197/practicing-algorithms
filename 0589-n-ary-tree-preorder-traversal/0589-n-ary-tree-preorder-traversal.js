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
    var stack = [];
    var output = [];
    
    if (!root) {
        return output;
    }
    
    stack.push(root);
    
    while (stack.length > 0) {
        var node = stack.pop();
        
        output.push(node.val);
        
        node.children.reverse();
        node.children.forEach(child => {
            stack.push(child);
        });
    }
    
    return output;
};