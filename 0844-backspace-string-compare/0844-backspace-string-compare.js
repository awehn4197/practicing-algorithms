/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {    
    var nextSBackspace = s.indexOf('#');
    var nextTBackspace = t.indexOf('#');
    
    // console.log(`nextSBackspace: ${nextSBackspace}, nextTBackspace: ${nextTBackspace}`);

    
    while (nextSBackspace !== -1 || nextTBackspace !== -1) {
        
        // console.log(`s: ${s}`);
        // console.log(`t: ${t}`);

        
        if (nextSBackspace !== -1) {
            s = s.substring(0, nextSBackspace - 1) + s.substring(nextSBackspace + 1)
        }
        
        if (nextTBackspace !== -1) {
            t = t.substring(0, nextTBackspace - 1) + t.substring(nextTBackspace + 1)
        }
        
        nextSBackspace = s.indexOf('#');
        nextTBackspace = t.indexOf('#');
    }
    
    return s === t;
};