/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Number.MAX_VALUE;
    let currSum = -Number.MAX_VALUE
    
    
    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i])
        max = Math.max(currSum, max)
    }
    
    return max
    
};