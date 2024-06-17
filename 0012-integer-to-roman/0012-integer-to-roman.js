/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const a = num.toString().split('').map(_int => parseInt(_int))
    
    const symbolDict = {
        1000: 'M',
        500: 'D',
        100: 'C',
        50: 'L',
        10: 'X',
        5: 'V',
        1: 'I'
    }
    
    let resultString = ''
    
    for (let i = 0; i < a.length; i++) {
        const p = 10**(a.length-1-i)
        const elem = a[i]
        
        if (elem === 9) {
            const base = symbolDict[p*10]
            const modifier = symbolDict[p]
            resultString += modifier + base
        } else if (elem === 4) {
            const base = symbolDict[p*5]
            const modifier = symbolDict[p]
            resultString += modifier + base
        } else if (elem >= 5) {
            const base = symbolDict[p*5]
            const modifier = symbolDict[p]
            let diff = elem - 5
            resultString += base
            while (diff > 0) {
                resultString += modifier
                diff--
            }
        } else {
            const modifier = symbolDict[p]
            let diff = elem
            while (diff > 0) {
                resultString += modifier
                diff--
            }
        }
        

    }
    
    return resultString

}
    // int to string: 3749 -> '3749'
    // string to array: '3749' -> [3, 7, 4, 9]
    // map array to correct power of 10: [3*10^(3), 7*(10^2), 4*(10^1), 9*(10^0)]
    // in general [a(i)*10^(len(a)-1-i)] where i is the index of the element
    // a(i) is the element at index i, len(a) is the length of the array
    
    // [3000, 700, 40, 9]
    // for each:
    // check most significant digit
    // consider not mapping and leaving them as [3, 7, 4, 9] to make it easier to get most significant digit
    
    // initialize resultString = ''
    
    // symbolDict = {
    //  1000: 'M',
    //  500: 'D',
    //  100: 'C',
    //  50: 'L',
    //. 10: 'X',
    //  5: 'V',
    //  1: 'I'
    // }
    
    // [3, 7, 4, 9]
    // determine power as p: 10^(len(a)-1-i) where len(a) is the length of the array and i is the index
    // 1. 9
        // base = symbolDict[p*10], modifier = symbolDict[p]
        // resultString += modifier + base
    // 2. 4
        // base = symbolDict[p*5], modifier = symbolDict[p]
        // resultString += modifier + base
    // 3. gte 5
        // base = symbolDict[p*5], modifier = symbolDict[p]
        // resultString += base + modifier * a(i) - 5
    // 4. lt 5
        // base = '', modifier = symbolDict[p]
        // resultString += modifier * a(i)
