/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const num_count = new Map();
    nums.forEach(num => {
        const count = num_count.get(num) ?? 0
        num_count.set(num, count+1)
    })
    let ans = 0
    num_count.forEach((value, key) => {
        compl_count = num_count.get(key+1) ?? 0
        if (compl_count > 0) {
            ans = Math.max(ans, value + compl_count)
        }
    })
    return ans
};