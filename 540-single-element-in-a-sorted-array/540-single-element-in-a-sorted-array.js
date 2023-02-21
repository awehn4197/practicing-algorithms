/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0;
    let hi = nums.length - 1;
    
    while (low < hi) {
        let mid = (low+hi)/2;
        if (mid % 2 === 1) mid--;
        if (nums[mid] === nums[mid+1]) {
            low = mid+2;
        } else {
            hi = mid;
        }
    }
    
    return nums[low];
};