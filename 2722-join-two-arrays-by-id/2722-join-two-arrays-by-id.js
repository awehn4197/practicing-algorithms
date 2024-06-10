/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let dict = {}
    
    arr1.forEach(item => {
        dict[item.id] = item
    })
    
    arr2.forEach(item => {
        let existing = dict[item.id] ?? {}
        for (key in item) {
            existing[key] = item[key]
        }
        dict[item.id] = existing
    })
    
    return Object.values(dict).sort((a, b) => a.id - b.id)
};