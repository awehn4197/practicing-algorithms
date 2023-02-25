/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    
    let adj = new Array(roads.length + 1).fill(0).map(row => []);
    roads.forEach(([origin, dest]) => {
        adj[origin].push(dest);
        adj[dest].push(origin);
    });
        
    let fuel = 0;
    
    function dfs (node, parent) {
        let representatives = 1;
        
        adj[node].forEach(neighbor => {
            if (neighbor !== parent) {
                representatives += dfs(neighbor, node)
            }
        });
        
        if (node !== 0) {
            fuel += Math.ceil(representatives/seats);
        }
        
        return representatives
    }
    
    dfs(0, -1);
    
    return fuel;
};