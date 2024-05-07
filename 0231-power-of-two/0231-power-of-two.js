/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false
    }
    const binaryRep = n.toString(2)
    oneCount = 0
    // for (let i = 0; i < binaryRep.length; i++) {
    //     const c = binaryRep[i]
    //     if (c === '1') {
    //         oneCount += 1
    //     }
    //     if (oneCount > 1 ) {
    //         return false
    //     }
    // }
    binaryRep.split('').forEach(c => {
        if (c === '1') {
            oneCount += 1
        }
        // if (oneCount > 1 ) {
        //     return false
        // }
    })
    return oneCount === 1
};