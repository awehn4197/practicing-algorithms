/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var num_set = new Set(nums)
    var result = []
    
    for (let i = 1; i <= nums.length; i++) {
        if (!num_set.has(i)) {
            result.push(i)
        }
    }
    
    return result
};