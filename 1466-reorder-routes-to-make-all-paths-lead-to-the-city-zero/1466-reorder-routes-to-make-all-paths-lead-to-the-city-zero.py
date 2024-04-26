class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        def dfs(node):
            visited[node] = True
            count = 0
            for neighbor in al[node]:
                if not visited[abs(neighbor)]:
                    count += 1 if neighbor > 0 else 0
                    count += dfs(abs(neighbor))
            return count
        
        al = [[] for _ in range(len(connections) + 1)]
        for [n0, n1] in connections:
            al[n0].append(n1)
            al[n1].append(-n0)
        
        count = 0
        visited = [False] * (len(connections) + 1)
        return dfs(0)