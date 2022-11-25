/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var secDigitsToIndices = new Map();
    [...secret].forEach((digit, index) => {
        var indices = secDigitsToIndices.get(digit) || [];
        indices.push(index);
        secDigitsToIndices.set(digit, indices);
    });
    
    var guessDigitsToIndices = new Map();
    [...guess].forEach((digit, index) => {
        var indices = guessDigitsToIndices.get(digit) || [];
        indices.push(index);
        guessDigitsToIndices.set(digit, indices);
    });
    
    var bulls = 0; var cows = 0;

    // find bulls
    Array.from(guessDigitsToIndices.keys()).forEach(digit => {
        var guessIndices = guessDigitsToIndices.get(digit) || [];
        var secretIndices = secDigitsToIndices.get(digit) || [];
        
        for (let i = 0; i < guessIndices.length; i++) {
            var guessDigit = guessIndices[i];
            var secIndex = secretIndices.indexOf(guessDigit);
            // console.log(`digit: ${digit}, guessIndices: ${guessIndices}, secretIndices: ${secretIndices}`)
            if (secIndex >= 0) {
                console.log('incrementing bulls');
                bulls++;
                guessIndices[i] = 'x';
                secretIndices[secIndex] = 'x';
            }
        }
        
        guessDigitsToIndices.set(digit, guessIndices);
        secDigitsToIndices.set(digit, secretIndices);
    });
    
    // find cows
    Array.from(guessDigitsToIndices.keys()).forEach(digit => {
        var guessIndices = (guessDigitsToIndices.get(digit) || []).filter(i => i !== 'x');
        var secretIndices = (secDigitsToIndices.get(digit) || []).filter(i => i !== 'x');
        
        for (let i = 0; i < guessIndices.length; i++) {
            var guessDigit = guessIndices[i];
            
            var secIndex = secretIndices.indexOf(guessDigit);
            // console.log(`digit: ${digit}, guessIndices: ${guessIndices}, secretIndices: ${secretIndices}`);
            // console.log(`guessDigitIndex: ${guessDigit}, secIndex: ${secIndex}`);
            if (secretIndices.length > 0) {
                // console.log('increasing cows');
                cows++;
                guessIndices[i] = 'x';
                secretIndices.pop();
            }
        }
        
        guessDigitsToIndices.set(digit, guessIndices);
        secDigitsToIndices.set(digit, secretIndices);
    });
    
//     // console.log(`secDigitsToIndices: ${Array.from(secDigitsToIndices)}`);
    
//     var bulls = 0; var cows = 0;
//     var mappedIndicesOfGuessString = [];
    
//     [...guess].forEach((digit, index) => {
//         var matchingIndices = secDigitsToIndices.get(digit) || [];
//         var directMatch = matchingIndices.indexOf(index);
//         // console.log(`digit: ${digit}, index: ${index}, matchingIndices: ${matchingIndices}, directMatch: ${directMatch}`);
//         if (directMatch >= 0) {
//             bulls++;
//             console.log(`matchingIndices b4: ${matchingIndices}`);
//             matchingIndices.splice(directMatch, 1);
//             console.log(`matchingIndices after: ${matchingIndices}`);
//             secDigitsToIndices.set(digit, matchingIndices);
//             mappedIndicesOfGuessString.push()
//         }
//     });
    
//     [...guess].forEach(digit => {
//         var matchingIndices = secDigitsToIndices.get(digit) || [];
//         if (matchingIndices.length > 0) {
//             cows++;
//             matchingIndices.pop();
//             secDigitsToIndices.set(digit, matchingIndices);
//         }
//     });
    
    return `${bulls}A${cows}B`;
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