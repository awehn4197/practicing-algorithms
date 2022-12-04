/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        var nextChar = s.charAt(i);
        if (nextChar === ')' || nextChar === ']' || nextChar === '}') {
            var topOfStack = stack.pop();
            if (topOfStack !== getCharComplement(nextChar)) {
                return false;
            }
        } else {
            stack.push(nextChar);
        }
    }
    return !stack.length;
};
    
var getCharComplement = (ch) => {
    switch (ch) {
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
        default:
            return undefined;    
    }
}