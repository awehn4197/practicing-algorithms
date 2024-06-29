/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // sort nums -> nLogn
    // this will allow us to iterate over the nums in a more controlled way
    // making adjustments to the left or to the right to precisely tune proximity to target
    // let n := nums.length
    // let result = []
    // four pointers
    // pointer 1 (left) -> for loop from 0 to n-4, end of each loop increase until new value found
    // pointer 2 (right) -> initialized at n-1, ranges to left+3, end of each loop decrease until new value found
    // pointer 3 (leftMid) -> initialized at left+1
    // pointer 4 (rightMid) -> initialized at right-1
    // currSum = nums[left]+nums[leftMid]+nums[rightMid]+nums[right]
    // if currSum === target
        // result.push([nums[left], nums[leftMid], nums[rightMid], nums[right]])
        // increase leftMid until new value found, decrease rightMid until new value found
    // if currSum < target -> increase leftMid
    // if currSum > target -> decrease rightMid
    
    nums.sort((a,b) => a-b);
    const n = nums.length;
    let result = [];
    
    for (let left = 0; left <= n-4; left++) {
        for (let right = n-1; right >= left+3; right--) {
            let leftMid = left+1;
            let rightMid = right-1;
            while (leftMid < rightMid) {
                const currSum = nums[left]+nums[leftMid]+nums[rightMid]+nums[right];
                // console.log('(', left, leftMid, rightMid, right, '): (', nums[left], nums[leftMid], nums[rightMid], nums[right], '), sum=', currSum);
                if (currSum === target) {
                    result.push([nums[left], nums[leftMid], nums[rightMid], nums[right]])
                    while (nums[leftMid+1] === nums[leftMid]) {
                        leftMid++;
                    }
                    leftMid++;
                    while (nums[rightMid-1] === nums[rightMid]) {
                        rightMid--;
                    }
                    rightMid--;
                } else if (currSum > target) {
                    rightMid--;
                } else if (currSum < target) {
                    leftMid++;
                }
            }
            while (nums[right-1] === nums[right]) {
                right--;
            }
        }
        while (nums[left+1] === nums[left]) {
            left++;
        }
    }
    
    return result;
};