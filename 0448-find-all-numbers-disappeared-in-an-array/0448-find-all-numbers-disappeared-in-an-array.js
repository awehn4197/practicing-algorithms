/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var num_set = new Set()
    for (let i = 1; i <= nums.length; i++) {
        num_set.add(i)
    }
    nums.forEach(num => num_set.delete(num))
    return [...num_set]
};