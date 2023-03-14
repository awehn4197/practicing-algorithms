import java.util.HashMap;

class Solution {
    
    public int romanToInt(String s) {
        HashMap<Character, Integer> romanNumerals = new HashMap<Character, Integer>();
        romanNumerals.put('I', 1);
        romanNumerals.put('V', 5);
        romanNumerals.put('X', 10);
        romanNumerals.put('L', 50);
        romanNumerals.put('C', 100);
        romanNumerals.put('D', 500);
        romanNumerals.put('M', 1000);
        
        char[] charsRev = new StringBuilder(s).reverse().toString().toCharArray();
        System.out.println(charsRev);
        
        int sum = 0;
        int i = 0;
        while (i < charsRev.length) {
            if (i < charsRev.length - 1 && romanNumerals.get(charsRev[i]) > romanNumerals.get(charsRev[i+1])) {
                sum += romanNumerals.get(charsRev[i]) - romanNumerals.get(charsRev[i+1]);
                i += 2;
            } else {
                sum += romanNumerals.get(charsRev[i]);
                i++;
            }
        }
        
        return sum;
    }
}