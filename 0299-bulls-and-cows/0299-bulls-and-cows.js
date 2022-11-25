/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0; var cows = 0;
    
    var secDigitCount = new Map();
    [...secret].forEach(digit => {
        var count = secDigitCount.get(digit) || 0;
        secDigitCount.set(digit, count + 1);
    });
    
    for (let i = 0; i < guess.length; i++) {
        var secCount = secDigitCount.get(guess.charAt(i)) || 0;
        
        if (secret.charAt(i) === guess.charAt(i)) {
            bulls++;

            if (secCount <= 0) {
                cows--;
            }
            
        } else if (secCount > 0) {
            cows++;
        }
        
        secDigitCount.set(guess.charAt(i), secCount-1);
    }
    
    return `${bulls}A${cows}B`;

    
    
//     var bulls = 0; var cows = 0;

//     // find bulls
//     Array.from(guessDigitsToIndices.keys()).forEach(digit => {
//         var guessIndices = guessDigitsToIndices.get(digit) || [];
//         var secretIndices = secDigitsToIndices.get(digit) || [];
        
//         for (let i = 0; i < guessIndices.length; i++) {
//             var guessDigit = guessIndices[i];
//             var secIndex = secretIndices.indexOf(guessDigit);
//             if (secIndex >= 0) {
//                 console.log('incrementing bulls');
//                 bulls++;
//                 guessIndices[i] = 'x';
//                 secretIndices[secIndex] = 'x';
//             }
//         }
        
//         guessDigitsToIndices.set(digit, guessIndices);
//         secDigitsToIndices.set(digit, secretIndices);
//     });
    
//     // find cows
//     Array.from(guessDigitsToIndices.keys()).forEach(digit => {
//         var guessIndices = (guessDigitsToIndices.get(digit) || []).filter(i => i !== 'x');
//         var secretIndices = (secDigitsToIndices.get(digit) || []).filter(i => i !== 'x');
        
//         for (let i = 0; i < guessIndices.length; i++) {
//             var guessDigit = guessIndices[i];
            
//             if (secretIndices.length > 0) {
//                 cows++;
//                 guessIndices[i] = 'x';
//                 secretIndices.pop();
//             }
//         }
        
//         guessDigitsToIndices.set(digit, guessIndices);
//         secDigitsToIndices.set(digit, secretIndices);
//     });
    
//     return `${bulls}A${cows}B`;
};

/*
    create a map of the digits in secret from digit to matches (array of indices)
    iterate over the digits of guess to find bulls
        (digit, index) ->   look up digit in map -> matches arr
                            if matches -> findIndexOf(digit)
                                if exists increment bulls, remove digit from matches array
    iterate over the digits of guess to find cows
        (digit, index) ->   look up digit in map -> matches arr
                            if matches
                                if matches.length > 0
                                    cows++; matches.pop();
                                
    if we go over the digits twice, it's O(2n) ~ O(n) so it's not like performance will suffer
                                
    14 - sec
    44 - gue
    
    
*/