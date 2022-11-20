/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<Integer> preorder(Node root) {
        LinkedList<Node> stack = new LinkedList();
        LinkedList<Integer> output = new LinkedList();
        
        if (root == null) {
            return output;
        }
        
        stack.add(root);
        while (!stack.isEmpty()){
            Node next = stack.pollLast();
            output.add(next.val);
            
            Collections.reverse(next.children);
            for (Node child : next.children) {
                stack.add(child);
            }
        }
        
        return output;
    }
}