# 8kyu - Even or Odd
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


print(even_or_odd(2)) # Even
print(even_or_odd(1)) # Odd
print(even_or_odd(0)) # Even
print(even_or_odd(1545452)) # Even
print(even_or_odd(7)) # Odd
print(even_or_odd(78)) # Even
print(even_or_odd(-123)) # Odd
