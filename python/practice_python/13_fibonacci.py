# http://www.practicepython.org/exercise/2014/04/30/13-fibonacci.html

"""
Write a program that asks the user how many Fibonnaci numbers
to generate and then generates them. Take this opportunity to
think about how you can use functions. Make sure to ask the
user to enter the number of numbers in the sequence to
generate.(Hint: The Fibonnaci seqence is a sequence of
numbers where the next number in the sequence is the sum
of the previous two numbers in the sequence. The sequence
looks like this: 1, 1, 2, 3, 5, 8, 13,...)
"""

count = int(raw_input("How many Fibonacci numbers do you want? "))

# n is the nth term
def get_fibonacci_number(n):
  if n < 3:
    return 1
  return get_fibonacci_number(n - 1) + get_fibonacci_number(n - 2)

result = ""
for i in range(count):
  result += str(get_fibonacci_number(i + 1)) + ", "
print result[:len(result) - 2]
