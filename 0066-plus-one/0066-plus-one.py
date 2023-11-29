class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        i = len(digits) - 1
        carry = True
        while carry and i >= 0:
            newVal = digits[i] + 1
            digits[i] = (newVal) % 10
            i -= 1
            if (newVal < 10):
                carry = False
        if carry:
            digits = [1] + digits
        return digits
            