class Solution:
    def addBinary(self, a: str, b: str) -> str:
        if len(a) < len(b):
            return self.addBinary(b, a)
        
        binDict = {
            "0": 0,
            "1": 1
        }
        
        ai = len(a) - 1
        carry = 0
        binSum = ""
        while ai >= 0:
            bi = ai - (len(a)-len(b))
            bVal = 0
            if bi >= 0:
                bVal = binDict[b[bi]]

            sum = binDict[a[ai]] + bVal + carry
            binSum = str(sum % 2) + binSum
            ai -= 1
            carry = 1 if sum > 1 else 0
                
        if carry == 1:
            binSum = "1" + binSum
        
        return binSum