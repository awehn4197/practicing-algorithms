def map_char(c: str) -> int:
    match c:
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
        case _:
            return

class Solution:
    def romanToInt(self, s: str) -> int:
        sum = 0
        i = 0
        while i < len(s):
            curr = s[i]
            if (i < len(s) - 1):
                nxt = s[i+1]
                if (map_char(curr) < map_char(nxt)):
                    sum += map_char(nxt) - map_char(curr)
                    i += 2
                else:
                    sum += map_char(curr)
                    i += 1
            else:
                sum += map_char(curr)
                i += 1
        return sum
        