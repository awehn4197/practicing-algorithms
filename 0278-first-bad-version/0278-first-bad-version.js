/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var low = 1;
        var high = n;
        var lowestBadIndex = n;
        
        while (low <= high) {
            var mid = Math.ceil((low + high)/2);
            if (isBadVersion(mid)) {
                lowestBadIndex = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        return lowestBadIndex;
    };
};