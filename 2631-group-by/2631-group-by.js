/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let res = {};
        
    this.forEach(thing => {
        const key = fn(thing)
        let curr = res[key] || []
        curr.push(thing)
        res[key] = curr
    })
    
    return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */