/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = -1;
    var high = nums.length;

    var mid;
    while (low < high-1) {
        // console.log(`low: ${low}, high: ${high}`)
        mid = Math.floor((low+high)/2);
        // console.log(`checking index: ${mid}, val: ${nums[mid]}, target: ${target}`)
        if (nums[mid] === target) {
            // console.log('equal');
            return mid;
        } else if (nums[mid] > target) {
            // console.log('greater');
            high = mid;
        } else if (nums[mid] < target) {
            // console.log('less than');
            low = mid;
        }
    }

    return high;
};