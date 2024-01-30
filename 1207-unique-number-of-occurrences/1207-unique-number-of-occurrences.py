class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count = Counter(arr)
        count_values_set = set(count.values())
        return len(count_values_set) == len(count.values())