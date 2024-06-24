/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort nums ascending
    // let res = []
    // for (let left = 0; left < nums.length - 2; left++)
    // initialize mid := left+1, right := nums.length-1
    // while (left < right)
    // sum := nums[left]+nums[mid]+nums[right]
    // case 1: sum === 0
    //      res.push([nums[left], nums[mid], nums[right]])
    //      decrease right until new value
    //      increase mid until new value
    // case 2: sum < 0
    //      increase mid
    // case 3: sum > 0
    //      decrease right
    // increase left until new value
    
    nums.sort((a, b) => a-b)
    let res = []
    for (let left=0; left < nums.length-2; left++) {
        let mid = left+1
        let right = nums.length-1
        while (mid < right) {
            // console.log(left, mid, right)
            let sum = nums[left]+nums[mid]+nums[right]
            if (sum === 0) {
                res.push([nums[left], nums[mid], nums[right]])
                while (nums[right-1] === nums[right]) {
                    right--;
                }
                right--;
                while (nums[mid+1] === nums[mid]) {
                    mid++;
                }
                mid++;
            } else if (sum < 0) {
                mid++;
            } else {
                right--;
            }
        }
        while (nums[left+1] === nums[left]) {
            left++
        }
    }
    return res;
};