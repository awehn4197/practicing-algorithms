var TimeLimitedCache = function() {
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
//     if (this.cache.has(key)) {
        
//     }
    const timer = setTimeout(() => {
        this.cache[key].value = -1
    }, duration)
    
    let returnVal = false
    
    if (key in this.cache) {
        const delTimer = this.cache[key]['timer']
        clearTimeout(delTimer)
        returnVal = true
    }
    
    this.cache[key] = {
        value,
        timer
    }
    
    return returnVal
        
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (key in this.cache) {
        return this.cache[key]['value']
    }
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0
    
    for (const [key, val] of Object.entries(this.cache)) {
        if (val.value !== -1) {
            count++
        }
    }
    
    return count
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */