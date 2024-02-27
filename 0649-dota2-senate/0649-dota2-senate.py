from collections import deque

class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        radiant = deque()
        dire = deque()
        
        for i, senator in enumerate(senate):
            if senator == 'R':
                radiant.append(i)
            else:
                dire.append(i)
        
        next_index = len(senate)
        
        while len(radiant) and len(dire):
            r_index = radiant.popleft()
            d_index = dire.popleft()
            if r_index < d_index:
                radiant.append(next_index)
            else:
                dire.append(next_index)
            next_index += 1
        
        if len(radiant):
            return 'Radiant'
        else:
            return 'Dire'