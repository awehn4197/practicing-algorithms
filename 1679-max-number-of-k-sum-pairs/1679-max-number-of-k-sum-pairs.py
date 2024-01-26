class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        count = Counter(nums)
        op_count = 0
        for val, ct in count.items():
            compl = k - val
            if compl == val:
                op_count += ct // 2
            elif val < compl:
                op_count += min(ct, count[compl])
        return op_count