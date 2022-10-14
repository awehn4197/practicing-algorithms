/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var visited = new Set();
var adjacent = new Map();

var accountsMerge = function(accounts) {
    
    visited = new Set();
    adjacent = new Map();
    
    const accountListSize = accounts.length;
    

    var mergedAccounts = [];
    
    accounts.forEach((account) => {
        const accountSize = account.length;
        
        const accountFirstEmail = account[1];
        
        for (let j = 2; j < accountSize; j++) {
            const accountEmail = account[j];
            // console.log('accountEmail: ', accountEmail);
            
            // console.log('adjacent 1: ', adjacent);
            if (!adjacent.has(accountFirstEmail)) {
                adjacent.set(accountFirstEmail, []);
            }
            
            adjacent.get(accountFirstEmail).push(accountEmail);
            
            if (!adjacent.has(accountEmail)) {
                adjacent.set(accountEmail, []);
            }
            
            adjacent.get(accountEmail).push(accountFirstEmail);
            
            // console.log('adjacent 2: ', adjacent);
            
        }
        
    });
    
    accounts.forEach((account) => {
        const accountName = account[0];
        const accountFirstEmail = account[1];

        if (!visited.has(accountFirstEmail)) {
            var mergedAccount = [];

            // console.log('mergedAccount: ', mergedAccount);
            // console.log('pushing account: ', accountName);
            mergedAccount.push(accountName);

            DFS(mergedAccount, accountFirstEmail);

            // console.log('mergedAccount before sorting: ', mergedAccount);
            const sortedAccount = mergedAccount.slice(0, 1).concat(mergedAccount.slice(1, mergedAccount.length).sort());
            // console.log('mergedAccount after sorting: ', sortedAccount);


            mergedAccounts.push(sortedAccount);
        }

    });
    
    return mergedAccounts;

};

function DFS(mergedAccount, email) {
    // console.log('visited 1: ', visited);

    visited.add(email); // we can do this multiple times since visited is a Set
    mergedAccount.push(email);
    
    // console.log('visited 2: ', visited);

    
    if (!adjacent.has(email)) {
        return;
    }
    
    adjacent.get(email).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
            DFS(mergedAccount, neighbor);
        }
    });
}