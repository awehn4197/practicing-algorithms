/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0;
    let hi = nums.length - 1;
    
    while (low < hi) {
        // console.log(`1. low: ${low}, hi: ${hi}`)
        let mid = (low+hi)/2;
        let halvesAreEven = mid % 2 === 0;
        
        if (nums[mid] === nums[mid-1]) {
            if (halvesAreEven) {
                hi = mid - 2;
            } else {
                low = mid + 1;
            }
        } else if (nums[mid] === nums[mid+1]) {
            if (halvesAreEven) {
                low = mid + 2;
            } else {
                hi = mid - 1;
            }
        } else {
            return nums[mid];
        }
        // console.log(`2. low: ${low}, hi: ${hi}`)

    }
    
    return nums[low];
};