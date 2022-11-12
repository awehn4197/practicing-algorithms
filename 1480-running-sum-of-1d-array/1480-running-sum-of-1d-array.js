/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var runningSum = [];
    var cumulativeSum = 0;
    nums.forEach(num => {
        cumulativeSum += num;
        runningSum.push(cumulativeSum);
    });
    return runningSum;
};