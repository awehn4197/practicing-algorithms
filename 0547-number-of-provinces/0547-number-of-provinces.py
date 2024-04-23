class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        visited = [False] * len(isConnected)
        count = 0
        
        def DFS(i):
            for j in range(len(isConnected)):
                if (isConnected[i][j] and not visited[j]):
                    visited[j] = True
                    DFS(j)
        
        for x in range(len(isConnected)):
            if not visited[x]:
                DFS(x)
                count += 1
        
        return count
                
            