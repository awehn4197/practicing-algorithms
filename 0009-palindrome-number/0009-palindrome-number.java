class Solution {
    public boolean isPalindrome(int x) {
        String forwards = String.valueOf(x);
        String backwards = new StringBuilder(forwards).reverse().toString();
        return forwards.equals(backwards);
    }
}