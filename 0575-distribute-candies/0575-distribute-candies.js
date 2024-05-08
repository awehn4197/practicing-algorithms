/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const types = new Set(candyType)
    // const candyCount = new Map()
    // candyType.forEach(type => {
    //     const count = candyCount.get(type) ?? 0
    //     candyCount.set(type, count+1)
    // })
    // console.log(candyCount)
    // console.log(candyCount.size)
    // console.log(candyType.length/2)
    return Math.min(candyType.length/2, types.size)
};