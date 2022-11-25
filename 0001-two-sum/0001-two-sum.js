/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsToIndices = new Map();
    nums.forEach((num, index) => {
        var indices = numsToIndices.get(num) || [];
        indices.push(index);
        numsToIndices.set(num, indices);
    });
    
    for (let i = 0; i < nums.length; i++) {
        var difference = target - nums[i];
        var compl = numsToIndices.get(difference);
        // console.log(`i: ${i}, nums[i]: ${nums[i]}, diff: ${difference}, compl: ${compl}`);
        if (compl && Array.isArray(compl) && compl.length > 0) {
            if (i === compl[0]) continue;
            return [i, compl[0]];
        }
    }
    
    return [-1, -1];
};