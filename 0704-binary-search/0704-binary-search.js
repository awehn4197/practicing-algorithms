/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    
    while (low <= high) {
        const middle = Math.floor((low + high)/2);
        if (nums[middle] === target) return middle;
        if (nums[middle] < target) low = middle + 1;
        if (nums[middle] > target) high = middle - 1;
    }
    
    return -1;
};