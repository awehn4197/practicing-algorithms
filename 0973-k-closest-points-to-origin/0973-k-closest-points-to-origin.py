import heapq

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        eucl_distances_squared = list(map(lambda pt: (pt[0]**2+pt[1]**2, pt[0], pt[1]), points))
        # print(eucl_distances_squared)
        heapq.heapify(eucl_distances_squared)
        result = []
        while k > 0:
            next_val = heapq.heappop(eucl_distances_squared)
            result.append([next_val[1], next_val[2]])
            k -= 1
        return result