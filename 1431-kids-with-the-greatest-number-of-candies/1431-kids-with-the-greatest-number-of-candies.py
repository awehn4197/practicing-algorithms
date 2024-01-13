class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandiesPossessed = max(candies)
        result = []
        for i in range(len(candies)):
            result.append(candies[i]+extraCandies >= maxCandiesPossessed)
        return result