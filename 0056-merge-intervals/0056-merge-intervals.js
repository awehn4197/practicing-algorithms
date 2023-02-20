/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    const mergedIntervals = [intervals[0]];
    
    function peek() {
        return mergedIntervals[mergedIntervals.length - 1];
    }
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= peek()[1] && peek()[0] <= intervals[i][1]) {
            let recentInterval = mergedIntervals.pop();
            recentInterval[1] = Math.max(intervals[i][1], recentInterval[1]);
            mergedIntervals.push(recentInterval);
        } else {
            mergedIntervals.push(intervals[i]);
        }
    }
    
    return mergedIntervals; 
};