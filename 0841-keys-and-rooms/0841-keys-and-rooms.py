class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        rooms_visited = set([0])
        keys = set(rooms[0])
        while keys:
            new_keys = set()
            for key in keys:
                if key not in rooms_visited:
                    rooms_visited.add(key)
                    new_keys.update(rooms[key])
            keys = new_keys
        # print(rooms_visited)
        return len(rooms_visited) == len(rooms)