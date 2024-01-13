
class Solution:
    def strADividesStringB(self, strA: str, strB: str):
        if len(strB) % len(strA) == 0:
            l = 0; r = len(strA)
            while r <= len(strB):
                # print(f"str: {strB[l:r]}, div: {strA}")
                if strB[l:r] == strA:
                    l = l + len(strA); r = r + len(strA)
                else:
                    return False
            return True
        else:
            return False

    def gcdOfStrings(self, str1: str, str2: str) -> str:
        prefixToTest = ""
        if len(str1) <= len(str2):
            prefixToTest = str1
        else:
            prefixToTest = str2
        while len(prefixToTest) != 0:
            # print(f"prefixToTest: {prefixToTest}")
            if self.strADividesStringB(prefixToTest, str1) and self.strADividesStringB(prefixToTest, str2):
                return prefixToTest
            prefixToTest = prefixToTest[:-1]
        return ""