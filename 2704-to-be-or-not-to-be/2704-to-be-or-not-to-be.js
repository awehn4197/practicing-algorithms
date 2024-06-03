/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    this.actual = val
    
    function evaluateExpression(exp) {
        if (exp) {
            return true
        } else {
            throw new Error('Not Equal')
        }
    }
    
    function evaluateNegatedExpression(exp) {
        if (exp) {
            return true
        } else {
            throw new Error('Equal')
        }
    }
    
    return {
        toBe: (expected) => evaluateExpression(this.actual === expected),
        notToBe: (unexpected) => evaluateNegatedExpression(this.actual !== unexpected)
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */