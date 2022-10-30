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
    public int pathSumFromNode(TreeNode node, long currentSum, int targetSum) {
        if (node == null) return 0;
        
        currentSum = currentSum + node.val;
        // System.out.println("targetSum: " + targetSum + ", currentSum: " + currentSum);
                
        int leftCount = pathSumFromNode(node.left, currentSum, targetSum);
        int rightCount = pathSumFromNode(node.right, currentSum, targetSum);
        
        int pathCount = leftCount + rightCount;
        
        if (currentSum == targetSum) pathCount += 1;
        
        return pathCount;
    }
    
    public int pathSum(TreeNode root, int targetSum) {
        if (root == null) return 0;
        
        int pathsFromNode = pathSumFromNode(root, 0, targetSum);
        
        int leftCount = pathSum(root.left, targetSum);
        int rightCount = pathSum(root.right, targetSum);
        
        return pathsFromNode + leftCount + rightCount;
    }
}