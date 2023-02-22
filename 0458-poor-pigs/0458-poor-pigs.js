/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    var states = Math.floor(minutesToTest/minutesToDie) + 1;
    var fixedResult = (Math.log(buckets)/Math.log(states)).toFixed(15);
    return Math.ceil(fixedResult);
};