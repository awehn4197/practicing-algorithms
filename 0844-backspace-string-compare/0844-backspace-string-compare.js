/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {    
    var sStack = [];
    var tStack = [];
        
    for (let i = 0; i < Math.max(s.length, t.length); i++) {
        if (s.charAt(i) === '#') {
            sStack.pop();
        } else {
            sStack.push(s.charAt(i));
        }
        
        if (t.charAt(i) === '#') {
            tStack.pop();
        } else {
            tStack.push(t.charAt(i));
        }
    }
    
    return (sStack.join('') === tStack.join(''));
};