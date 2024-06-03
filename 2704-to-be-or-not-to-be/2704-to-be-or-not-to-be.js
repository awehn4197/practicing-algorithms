/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    this.actual = val
    
    return {
        toBe: (expected) => {
            if (this.actual === expected) {
                return true
            } else {
                throw new Error('Not Equal')
            }
        },
        notToBe: (unexpected) => {
            if (this.actual !== unexpected) {
                return true
            } else {
                throw new Error('Equal')
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */