/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set('qwertyuiop'.split(''))
    const row2 = new Set('asdfghjkl'.split(''))
    const row3 = new Set('zxcvbnm'.split(''))
    
    result = []
    
    words.map(word => {
        chs = word.split('')
        rowCount = [0, 0, 0]
        chs.forEach(ch => {
            ch = ch.toLowerCase()
            if (row1.has(ch)) {
                rowCount[0]++
            } else if (row2.has(ch)) {
                rowCount[1]++
            } else {
                rowCount[2]++
            }
        })
        if (rowCount[0] === word.length || rowCount[1] === word.length || rowCount[2] === word.length) {
            result.push(word)
        }
    })
    
    return result
};