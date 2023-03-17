class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> charMap = new HashMap<Character, Integer>();
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            charMap.put(c, charMap.getOrDefault(c, 0) + 1);
        }
                
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (charMap.get(c) == 1) return i;
        }
                
        return -1;
    }
}