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
        // console.log(`decodedString: ${decodedString}`);

        
        if (letterRegex.test(currChar)) {
            // decodedString.push(currChar);
            decodedString = decodedString + currChar;
            // console.log(`a decodedString: ${decodedString}`);

        }
        
        if (numberRegex.test(currChar)) {
            // console.log('number?');
            // var numString = currChar;
            
            var k = 0;
            while (numberRegex.test(s.charAt(index))) {
                k = k*10 + (s.charAt(index) - '0');
                index++;
            }
            
            index++;

            
            // while (numberRegex.test(s.charAt(index))) {
            //     numString += s.charAt(index);
            //     index++;
            // }
            
            // console.log(`numString: ${numString}`);
            // var num = parseInt(numString);
            
            // if (s.charAt(index) !== '[') {
            //     console.log('error');
            // }
            
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
            
            // console.log('entering recursion')
            var nestedString = decodeString(s.substring(bracketStartIndex, index + 1));
            // console.log(`nestedString: ${nestedString}, num: ${num}`)

            for (let i = 1; i <= k; i++) {
                // decodedString.push(nestedString);
                decodedString = decodedString + nestedString;
                // console.log(`n decodedString: ${decodedString}`);

            }
        }
        
        index++;
    }
    
    // console.log(`e decodedString: ${decodedString}`);
    
    return decodedString;
};