class Solution {
    public int strStr(String haystack, String needle) {
        int m = haystack.length();
        int n = needle.length();
        
        for (int windowStart = 0; windowStart <= m-n; windowStart++) {
            for (int i = 0; i < n; i++) {
                if (haystack.charAt(windowStart+i) != needle.charAt(i)) {
                    break;
                }
                
                if (i == n-1) {
                    return windowStart;
                }
            }
        }
        
        return -1;
    }
}