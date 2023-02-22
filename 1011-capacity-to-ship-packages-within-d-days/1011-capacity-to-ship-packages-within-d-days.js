/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let sumOfWeights = 0;
    let maxWeight = 0;

    for (weight of weights) {
        sumOfWeights += weight;
        maxWeight = Math.max(weight, maxWeight);
    }
    
    let left = maxWeight;
    let right = sumOfWeights;
    
    const isCapacityFeasible1 = (capacity) => {
        let noDays = 1;
        let currentLoad = 0;
        
        for (weight of weights) {
            currentLoad += weight;
            if (currentLoad > capacity) {
                noDays++;
                currentLoad = weight;
            }
        }
        
        return noDays <= days;
    }
    
    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if (isCapacityFeasible1(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

