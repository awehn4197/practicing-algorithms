/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, i=0) {
    var sumsSeen = new Set();

    while (n !== 1) {
        var sum = 0;
        while (n !== 0) {
            sum += (n%10)*(n%10);
            n -= n%10
            n = n/10;
            // console.log(`i: ${i}`);
            // i++;
        }
        if (sumsSeen.has(sum)) {
            return false;
        }
        sumsSeen.add(sum);
        n = sum;
    }
    
    return true;
};