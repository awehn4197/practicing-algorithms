/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i=0; i < nums.length; i++) {
        for (var j=0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [-1, -1];
};