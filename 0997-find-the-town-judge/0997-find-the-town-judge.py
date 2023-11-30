class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trustsSomeone = [False]*n
        peopleTrustedBy = [0]*n
        
        for [truster, trustee] in trust:
            trustsSomeone[truster-1] = True
            peopleTrustedBy[trustee-1] += 1
            
        for idx, count in enumerate(peopleTrustedBy):
            # print(f"count: {count}, idx: {idx}")
            if count == n-1 and not trustsSomeone[idx]:
                return idx+1
            
        return -1