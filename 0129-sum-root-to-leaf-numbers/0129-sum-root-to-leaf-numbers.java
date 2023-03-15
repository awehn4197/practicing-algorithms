/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sumNumbers(TreeNode root) {
        Deque<Pair<TreeNode, Integer>> queue = new ArrayDeque();
        ArrayList<Integer> pathVals = new ArrayList<Integer>();
        queue.add(new Pair(root, root.val));
        
        while (!queue.isEmpty()) {
            Pair<TreeNode, Integer> p = queue.remove();
            TreeNode node = p.getKey();
            int value = p.getValue();
            
            if (node.left == null && node.right == null) {
                pathVals.add(value);
            } else {
                if (node.left != null) {
                    queue.add(new Pair(node.left, 10*value + node.left.val));
                }
                
                if (node.right != null) {
                    queue.add(new Pair(node.right, 10*value + node.right.val));
                }
                
            }
        }
                
        return pathVals.stream().reduce(0, (subtotal, nextVal) -> subtotal + nextVal);
    }
}