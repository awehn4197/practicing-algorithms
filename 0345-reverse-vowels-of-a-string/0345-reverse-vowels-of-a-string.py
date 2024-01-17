class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {"a", "e", "i", "o", "u"}
        s_as_array = [ch for ch in s]
        l = 0
        r = len(s_as_array)-1
        while (l < r):
            if s_as_array[l].lower() in vowels and s_as_array[r].lower() in vowels:
                placeholder = s_as_array[l]
                s_as_array[l] = s_as_array[r]
                s_as_array[r] = placeholder
                l += 1
                r -= 1
            elif s_as_array[l].lower() in vowels:
                r -= 1
            elif s_as_array[r].lower() in vowels:
                l += 1
            else:
                l += 1
                r -= 1
        return "".join(s_as_array)