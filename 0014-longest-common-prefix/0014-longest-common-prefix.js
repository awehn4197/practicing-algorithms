/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return recursiveLCP(strs, 0, strs.length - 1);
};

var recursiveLCP = function(strs, startIndex, endIndex) {
    if (startIndex === endIndex) return strs[startIndex];
    var mid = Math.floor((startIndex+endIndex)/2);
    var leftLCP = recursiveLCP(strs, startIndex, mid);
    var rightLCP = recursiveLCP(strs, mid+1, endIndex);
    return lcpComparison(leftLCP, rightLCP);
}

var lcpComparison = function(str1, str2) {
    var n = Math.min(str1.length, str2.length);
    var lcp = '';
    for (let i = 0; i < n; i++) {
        if (str1.charAt(i) === str2.charAt(i)) {
            lcp += str1.charAt(i);
        } else {
            return lcp;
        }
    }
    return lcp;
}