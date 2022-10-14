/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var uniqueValue = 0;
    for(const num of nums) {
        uniqueValue = uniqueValue ^ num;
    }
    return uniqueValue;
};