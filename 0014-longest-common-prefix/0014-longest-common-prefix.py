class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        lcp = ''
        for i in range(min([len(s) for s in strs])):
            ogChar = strs[0][i]
            charMatches = True
            for s in strs:
                if s[i] == ogChar:
                    charMatches = charMatches and True
                else:
                    print('non matching char scenario')
                    return lcp
            if charMatches:
                lcp = lcp + ogChar
        print('the shortest string was the lcp')
        return lcp