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
 * @return {number}
 */
var maxPathSum = function(root) {
    var { reigningChampPathSum } = getAllPathSumsForNode(root);
    return reigningChampPathSum;
};

// var getAllPathSumsForNode = function(node, parentVal = '--') {
var getAllPathSumsForNode = function(node) {
    var reigningChampPathSum;
    var maxTopDownPathSumForNode;
    
    // var lc = '--';
    // var rc = '--';
    // if (node.left) lc = node.left.val;
    // if (node.right) rc = node.right.val;
    // console.log(`i'm node ${node.val}, my parent is: ${parentVal}, my lc is: ${lc}, my rc is: ${rc}`);

    //     console.log (`my lc is ${node.left.val}`);
    // if (node.right) console.log (`my rc is ${node.right.val}`);


    var leftNodeReigningChampPathSum;
    var rightNodeReigningChampPathSum;
    
    var maxLeftTopDownPathSum;
    var maxRightTopDownPathSum;

    if (node.left) {
        const { reigningChampPathSum: leftRCPS, maxTopDownPathSumForNode: leftMTDPSFN } = getAllPathSumsForNode(node.left);
        leftNodeReigningChampPathSum = leftRCPS;
        maxLeftTopDownPathSum = leftMTDPSFN;
    }

    if (node.right) {
        const { reigningChampPathSum: rightRCPS, maxTopDownPathSumForNode: rightMTDPSFN } = getAllPathSumsForNode(node.right);
        rightNodeReigningChampPathSum = rightRCPS;
        maxRightTopDownPathSum = rightMTDPSFN;
    }
 
    maxLeftTopDownPathSum = maxLeftTopDownPathSum ? maxLeftTopDownPathSum : 0;
    maxRightTopDownPathSum = maxRightTopDownPathSum ? maxRightTopDownPathSum : 0;
    maxTopDownPathSumForNode = Math.max(node.val, node.val + Math.max(maxLeftTopDownPathSum, maxRightTopDownPathSum));
    
    var sumsThatPeakAtThisNode = [node.val, maxLeftTopDownPathSum + node.val, node.val + maxRightTopDownPathSum, maxLeftTopDownPathSum + node.val + maxRightTopDownPathSum];
    var maxPathSumThatPeaksAtThisNode = Math.max(...sumsThatPeakAtThisNode);
    
    var newContenders = [];
    if (leftNodeReigningChampPathSum) newContenders.push(leftNodeReigningChampPathSum);
    if (rightNodeReigningChampPathSum) newContenders.push(rightNodeReigningChampPathSum);
    newContenders.push(maxPathSumThatPeaksAtThisNode);

    reigningChampPathSum = Math.max(...newContenders);
    
    // console.log('node: ', node.val);
    // console.log('maxLeftTopDownPathSum: ', maxLeftTopDownPathSum);
    // console.log('maxRightTopDownPathSum: ', maxRightTopDownPathSum);
    // console.log('maxTopDownPathSumForNode: ', maxTopDownPathSumForNode);
    // console.log('maxPathSumThatPeaksAtThisNode: ', maxPathSumThatPeaksAtThisNode);
    // console.log('reigningChampPathSum: ', reigningChampPathSum);
    // console.log();   

    return { reigningChampPathSum, maxTopDownPathSumForNode }

}
