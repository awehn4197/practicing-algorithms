/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var callsToGenSubP = 0;

var subsetsWithDup = function(nums) {
    const powersetWithDupes = genSubPowersetWithDupes(nums);
    console.log('total calls to recursive func: ', callsToGenSubP);
    return removeDupes(powersetWithDupes);
};

var removeDupes = function(arr) {
    arr.forEach(subarray => {
        subarray.sort();
    });
    return Array.from(new Set(arr.map(JSON.stringify)), JSON.parse);
};

var genSubPowersetWithDupes = function(arr) {
    callsToGenSubP++;
    console.log(`arr: ${arr}`);
    if (arr.length === 0) {
        return [[]];
    } else {
        const newVal = arr.shift();
        var subPowerset = genSubPowersetWithDupes(arr);
        console.log(`typeof subPowerset: ${typeof subPowerset}, val of subPowerset: ${JSON.stringify(subPowerset)}`);
        var newSets = [];
        subPowerset.forEach(powerset => {
            console.log('powerset: ', powerset);
            const newset = powerset.slice();
            newset.push(newVal);
            console.log('newSet: ', powerset);
            newSets.push(newset);
        });
        console.log('newSets: ', newSets);
        console.log('subPowerset values: ', Object.values(subPowerset));
        // return newSets.append(Object.values(subPowerset));
        console.log('subPowerset b4 combine: ', subPowerset);
        console.log('newSets b4 combine: ', newSets);
        const combinedSets = subPowerset.concat(newSets)
        console.log('concatified: ', combinedSets);
        return combinedSets;
    }
}