class Solution:
    def compress(self, chars: List[str]) -> int:
        write_index = 0
        read_index = 1
        last_char = chars[0]
        streak_length = 1
        # print(chars)

        while read_index <= len(chars):
            if read_index == len(chars) or chars[read_index] != last_char:
                # print(f"streak ended - read_index: {read_index}, write_index: {write_index}")
                # print(f"streak_length: {streak_length}, last_char: {last_char}")
                chars[write_index] = last_char
                write_index += 1
                if streak_length > 1:
                    # this is not constant space - it's logarithmic
                    streak_length_digits = []
                    while streak_length != 0:
                        mod = streak_length % 10
                        streak_length_digits.append(str(mod))
                        streak_length = streak_length // 10
                    while len(streak_length_digits) > 0:
                        chars[write_index] = str(streak_length_digits.pop())
                        write_index += 1
                streak_length = 1
            else:
                print(f"chars[read_index] == last_char")
                streak_length += 1
            
            # % function to avoid index out of range exception on last iteration
            last_char = chars[read_index % len(chars)]
            read_index += 1
            # print(chars)

        return write_index