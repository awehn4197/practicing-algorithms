/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var timesSeen = new Map();
    for (let i = 0; i < nums.length; i++) {
        var seen = timesSeen.get(nums[i]) || 0;
        timesSeen.set(nums[i], ++seen);
    }
    return timesSeen.size < nums.length; 
};