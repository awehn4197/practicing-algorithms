/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let left = 0;
    let right = 0;
    const ranges = [];
    while (right < nums.length) {
        if (nums[right+1] === nums[right]+1) {
            right = right+1;
        } else {
            if (left === right) {
                ranges.push(`${nums[left]}`);
            } else {
                ranges.push(`${nums[left]}->${nums[right]}`);
            }
            left = right + 1;
            right = right + 1;
        }
    }
    return ranges;
};