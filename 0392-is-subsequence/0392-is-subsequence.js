/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    var previousTIndex = 0;
    for (var i = 0; i < s.length; i++) {
        const nextSChar = s[i];
        const newIndex = t.indexOf(nextSChar, previousTIndex);
        // console.log(`nextSChar = ${nextSChar}, newIndex = ${newIndex}, previousTIndex = ${previousTIndex}`)
        if (newIndex === -1) return false;
        previousTIndex = newIndex + 1;
    }
    return true;
};