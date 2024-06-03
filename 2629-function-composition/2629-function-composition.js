/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let currVal = x
        let fnIndex = functions.length - 1
        while (fnIndex >= 0) {
            currVal = functions[fnIndex--](currVal)
        }
        return currVal
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */