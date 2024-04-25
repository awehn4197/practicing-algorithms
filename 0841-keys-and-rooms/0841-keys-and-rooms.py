class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)
        
        def dfs(i):
            visited[i] = True
            for key in rooms[i]:
                if not visited[key]:
                    dfs(key)
        
        dfs(0)
        
        return all(visited)