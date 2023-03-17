class Solution {
    public boolean isAnagram(String s, String t) {
        char[] sArr = s.toCharArray();
        Arrays.sort(sArr);
        
        char[] tArr = t.toCharArray();
        Arrays.sort(tArr);
        
        return (new String(sArr)).equals(new String(tArr));
    }
}