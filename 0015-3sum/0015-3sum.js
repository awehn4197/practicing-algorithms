/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    nums.sort((a, b) => a-b)
    for (let low = 0; low < nums.length - 2; low++) {
        let mid = low+1
        let hi = nums.length-1
        while (mid < hi) {
            const sum = nums[low]+nums[mid]+nums[hi]
            if (sum === 0) {
                result.push([nums[low], nums[mid], nums[hi]])
                while (nums[hi-1] === nums[hi]) {
                    hi--
                }
                while (nums[mid+1] === nums[mid]) {
                    mid++
                }
                hi--;
                mid++;
            }
            else if (sum > 0) {
                hi--;
            } else {
                mid++;
            }
        }
        while (nums[low+1] === nums[low]) {
            low++
        }
    }
    return result;
    // let result = []
    // sort nums in ascending order
    // for low in range 0 to nums.length-3
    // initialize mid := low+1, hi := nums.length-1
    // 3 pointers, 0 <= low < mid < hi <= nums.length-1
    // sum = nums[low]+nums[mid]+nums[hi]
    // if sum === 0: result.push([nums[low], nums[mid], nums[hi]])
    //      while nums[low+1] === nums[low], mid++
    //      while nums[hi-1] === nums[hi], hi--
    //      mid++, hi--
    // if sum > 0: hi--
    // if sum < 0: mid++
    
//     let count = {}
//     nums.forEach(num => {
//         let curr = count[num] ?? 0
//         count[num] = curr+1
//     })
//     console.log(count)
    
//     let result = []
//     for (const [key1, value1] of Object.entries(count)) {
//         for (const [key2, value2] of Object.entries(count)) {
//             const key3 = -(key1+key2)
//             const value3 = count[key3] ?? 0
//             if (value3 > 0) {
//                 result.push([key1, key2, key3])
//                 count[key1] = 0
//             }
//         }
//     }

    // counter dictionary
    // count = {
    //      -1: 2,
    //      0: 1,
    //      2: 1,
    //      -4: 1,
    // }
    // create the dictionary: O(n) time, O(n) space

    // result = []
    // for key1, c1 in count
    //  for key2, c2 in count
    //      key3 = -(key1 + key2)
    //      c3 = count[key3]
    //      if c3 > 0:
    //          result.push([key1, key2, key3])
    //          count[key1] = 0
    //      decrement = c1 choose 3 if key1=key2=key3
    //      decrement = 2 if key1=key2 or key1=key3
    //      else decrement = 1 
 
    //      if c3 > 0: 
        //      maxCombos = c1 choose 3 if key1=key2=key3
        //      maxCombos = c1 choose 2 if key1=key2 or key1=key3
        //      combosAdded = 0
        //          while combosAdded < maxCombos:
        //              result.push([key1, key2, key3])
        //              combosAdded++
        //              
        //          count[key1] = 0;
    // check for matches: O(n^2) time
};