# 6kyu - Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expanded_form(12) # Should return '10 + 2'
# expanded_form(42) # Should return '40 + 2'
# expanded_form(70304) # Should return '70000 + 300 + 4'

# NOTE: All numbers will be whole numbers greater than 0.


def expanded_form(num):
    result = []

    for i, digit in enumerate(str(num)):
        if digit == '0':
            continue
        result.append(digit + '0' * (len(str(num)) - i - 1))
    return ' + '.join(result)

print(expanded_form(12)) # '10 + 2'
print(expanded_form(42)) # '40 + 2'
print(expanded_form(70304)) # '70000 + 300 + 4'