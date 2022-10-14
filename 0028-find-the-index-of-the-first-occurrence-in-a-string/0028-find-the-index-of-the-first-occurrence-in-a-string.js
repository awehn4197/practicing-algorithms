/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1;
    
    var i = 0;
    var j = 0;
    
    while (i < haystack.length && j < needle.length) {
        if (haystack[i]===needle[j]) {
            console.log(`Equality: i - ${i}, j - ${j}, haystack[i] = ${haystack[i]}, needle[j] = ${needle[j]}`);
            i++;
            j++;
        } else {
            console.log(`not equal: i - ${i}, j - ${j}, haystack[i] = ${haystack[i]}, needle[j] = ${needle[j]}`);
            i = ++i-j;
            j = 0;
        }
    }
    
    console.log(`final: i - ${i}, j - ${j}`);

    if (j === needle.length) return i-j;
    
    return -1;
    // return haystack.indexOf(needle);
};