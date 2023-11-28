class Solution:
    def isValid(self, s: str) -> bool:
        d = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        
        openers = []
        
        for c in s:
            if c in d.values():
                openers.append(c)
            elif len(openers) > 0 and d[c] == openers[-1]:
                openers.pop()
            else:
                return False
            
        return len(openers) == 0