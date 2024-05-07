/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s1 = new Map()
    s.split('').forEach(ch => {
        if (!s1.has(ch)) {
            s1.set(ch, 1)
        } else {
            s1.set(ch, s1.get(ch)+1)
        }
    })
    
    t1 = new Map()
    t.split('').forEach(ch => {
        if (!t1.has(ch)) {
            t1.set(ch, 1)
        } else {
            t1.set(ch, t1.get(ch)+1)
        }
    })
    
    for (let [key, value] of t1) {
        if (s1.get(key) !== value) {
            return key
        }
    }
    
};