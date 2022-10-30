/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    return countPathsWithSum('og', root, 0, targetSum, 0, {});
};

function countPathsWithSum(direction, node, currentSum, targetSum, pathCount, instancesOfSumValues) {
    if (!node) return 0;

    currentSum = currentSum + node.val;
    
    var newCount = 0;
    
    // console.log('instancesOfSumValues: ', instancesOfSumValues);
    const countOfTargetDelta = instancesOfSumValues[currentSum - targetSum] || 0;

    // console.log('moved in direction: ', direction);
    // console.log('current node val: ', node.val);
    // console.log('currentSum: ', currentSum);
    // console.log('targetSum: ', targetSum);
    // console.log('currentSum - targetSum: ', currentSum - targetSum);
    if (countOfTargetDelta > 0) {
        // console.log('target delta match - increasing count by: ', countOfTargetDelta);
        newCount += countOfTargetDelta;
    }

    
    if (currentSum === targetSum) {
        // console.log('currentSum = targetSum - increasing count by 1');
        newCount += 1;
    }
    
    // console.log();
    
    const countOfCurrentSum = instancesOfSumValues[currentSum] || 0;
    instancesOfSumValues[currentSum] = countOfCurrentSum + 1;
        
    var leftPathCount = countPathsWithSum('left', node.left, currentSum, targetSum, pathCount, {...instancesOfSumValues});
    var rightPathCount = countPathsWithSum('right', node.right, currentSum, targetSum, pathCount, {...instancesOfSumValues});
    
    // console.log('leftPathCount: ', leftPathCount);
    // console.log('leftPathCount: ', rightPathCount);
    
    newCount += leftPathCount + rightPathCount;

    return newCount;

}