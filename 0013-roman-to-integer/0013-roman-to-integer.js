const integerEquivalents = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sum = 0;
    var index = s.length - 1;
    while(index >= 0) {
        var increment;
        if(index > 0 && (integerEquivalents[s[index]] > integerEquivalents[s[index-1]])){
            increment = integerEquivalents[s[index]] - integerEquivalents[s[index-1]];
            index = index-2;
        } else {
            increment = integerEquivalents[s[index]];
            index = index-1;
        }
        sum += increment;
    }
    return sum;
};
    
// will this algorithm go below 0? especially regarding index-2 assignment
// check the zero case



/*
II=2
count I instances
return

XII=12
count X, I instances
multiply X instances by 10 and add to I instances
return

wrong way - generalized
count M, D, C, L, X, V, I
return M*1000+D*500+C*100+L*50+X*10+V*5+I

MCMXCIV = 1994
start at end index (string.length)
check if character before it is less
yes -> subtract n-1 from n, add to sum, continue with n-2
no -> add n to sum, continue with n-1

const integerEquivalents = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}; 
*/