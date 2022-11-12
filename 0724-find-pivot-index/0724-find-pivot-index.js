/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var leftSum = 0;
    var rightSum = nums.reduce((sum, num) => sum + num, 0);
    for (var i = 0; i < nums.length; i++) {
        if (i > 0) leftSum += nums[i-1];
        if (i < nums.length) rightSum -= nums[i];
        console.log(`index: ${i}, leftSum: ${leftSum}, rightSum: ${rightSum}`);
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};