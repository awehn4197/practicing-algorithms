/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    var letterRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    
    var decodedString = '';
    
    var index = 0;
    
    while (index < s.length) {
        var currChar = s.charAt(index);
        
        if (letterRegex.test(currChar)) {
            decodedString = decodedString + currChar;
        }
        
        if (numberRegex.test(currChar)) {
            var k = 0;
            while (numberRegex.test(s.charAt(index))) {
                k = k*10 + (s.charAt(index) - '0');
                index++;
            }
            
            index++;
            
            var bracketStartIndex = index;
            var bracketCount = 1;
            
            while (bracketCount !== 0) {
                if (s.charAt(index+1) === '[') {
                    bracketCount++;
                } else if (s.charAt(index+1) === ']') {
                    bracketCount--;
                }
                index++;
            }
            
            var nestedString = decodeString(s.substring(bracketStartIndex, index + 1));

            for (let i = 1; i <= k; i++) {
                decodedString = decodedString + nestedString;
            }
        }
        
        index++;
    }
        
    return decodedString;
};