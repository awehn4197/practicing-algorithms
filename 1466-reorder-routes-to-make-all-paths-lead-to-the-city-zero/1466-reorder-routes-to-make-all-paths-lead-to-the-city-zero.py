class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        visited = [False] * n
        al = [[] for _ in range(n)]
        for [n0, n1] in connections:
            al[n0].append(n1)
            al[n1].append(-n0)
        
        def dfs(from_node):
            visited[from_node] = True
            count = 0
            for to_node in al[from_node]:
                if not visited[abs(to_node)]:
                    if to_node > 0:
                        count += 1
                    # visited[abs(to_node)] = True
                    count += dfs(abs(to_node))
            return count
        
        return dfs(0)                