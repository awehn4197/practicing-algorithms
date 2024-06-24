/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let smallestDiff = Infinity
    let closestSum = Infinity
    
    nums.sort((a, b) => a-b)
    for (let left = 0; left < nums.length - 2; left++) {
        let mid = left+1
        let right=nums.length-1
        while (mid < right) {
            const currSum = nums[left]+nums[mid]+nums[right]
            const currentDiff = Math.abs(target - (currSum))
            if (currentDiff < smallestDiff) {
                smallestDiff = Math.min(currentDiff, smallestDiff)
                closestSum = currSum
            }
            if (currSum >= target) {
                right--
            } else if (currSum < target) {
                mid++
            }
        }
        while (nums[left+1] === nums[left]) {
            left++
        }
    }
    
    return closestSum;
    
    // initialize smallestDiff to positive infinity
    // initialize closestSum to 
    // 
    // sort nums ascending
    // [-4, -1, 1, 2]
    // 3 pointers, left, mid, right
    // for (let left = 0; left < nums.length - 2; left++)
    // mid = left+1, right=nums.length-1
    // while (mid < right) {}
    //      currSum = nums[left]+nums[mid]+nums[right]
    //      currentDiff = Math.abs(target - (currSum)) < smallestDiff
    //      if currentDiff < smallestDiff
    //          smallestDiff = Math.min(currentDiff, smallestDiff)
    //          closestSum = currSum
    //      if currSum >= target
    //          right--
    //      else if currSum < target
    //          mid++
    
    
    //          increase mid until new value
    //          decrease right until new value
    //      if currentDiff > smallestDiff
};