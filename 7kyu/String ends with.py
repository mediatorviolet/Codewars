# 7kyu - String ends with?
# Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
#
# Examples
# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false

def solution(string, ending):
    return string[(len(string)) - (len(ending)): len(string)] == ending


print(solution('abcde', 'cde'))  # True
print(solution('abcde', 'abc'))  # False
print(solution('abcde', ''))  # True
