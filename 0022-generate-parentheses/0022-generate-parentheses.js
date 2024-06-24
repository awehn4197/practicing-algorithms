/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // start = ['(', ' ', '(', ' ', '(', ' ', ' ', ' ']
    // 1, 3, 5, 6, 7
    // 1, 3, 5, 7, 8, 9, 10 -> ['(', ' ', '(', ' ', '(', ' ', '(', ' ', ' ', ' ', ' '] 2n-1 open spots
    // (2n-1) choose n = (2n-1)!/(n!)*(n-1)!
    // choose 3 of those indices for the right parentheses to inhabit
    // next = ['(', ')', '(', ' ', '(', ')', ')', ' ']
    // nextStr = next.filter(el => el !== ' ').join('')
    // resultSet.add(nextStr)
    // dfs - left, right, currString
    // res = []
    // if right === n, res.push(currString)
    // if left < n, dfs(left+1, right, currString + '(')
    // if right < left, dfs(left, right+1, currString + ')')
    // return res
    
    // 0, 0, ''
        // 1, 0, '('
            // 2, 0, '(('
                // 3, 0, '((('
                    // 3, 1, '((()'
                        // 3, 2, '((())'
                            // 3, 3, '((()))' -> push
                // 2, 1, '(()'
                    // 2, 2 '(())'
                        // 3, 2 '(())('
                            // 3, 3 '(())()'
                    // 3, 1 '(()('
                        // 3, 2 '(()()'
                            // 3, 3 '(()())'
            // 1, 1, '()'
                // 2, 1 '()('
                    // 3, 1 '()(('
                            // 3, 3 '()(())'
                    // 2, 2 '()()'
                            // 3, 3 '()()()'
    
    function dfs(left, right, currString) {
        if (right === n) {
            res.push(currString)
        }
        
        if (left < n) {
            dfs(left+1, right, currString+'(')
        }
        
        if (right < left) {
            dfs(left, right+1, currString+')')
        }
    }
    
    let res = [];
    dfs(0, 0, '');
    
    return res;
};