class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        def dfs(i):
            for j in range(len(isConnected)):
                if isConnected[i][j] and not visited[j]:
                    visited[j] = True
                    dfs(j)
        
        visited = [False] * len(isConnected)
        count = 0
        for x in range(len(isConnected)):
            if not visited[x]:
                dfs(x)
                count += 1
        
        return count
                