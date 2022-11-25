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
}