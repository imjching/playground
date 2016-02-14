# http://www.practicepython.org/exercise/2014/03/12/06-string-lists.html

"""
Ask the user for a string and print out whether this string
is a palindrome or not. (A palindrome is a string that reads
the same forwards and backwards.)
"""

input_string = raw_input("Please enter a string: ")

def is_palindrome(input):
  # Method 1
  """
  for i in range(len(input) / 2):
    if input[i] != input[len(input) - i - 1]:
      return False
  return True
  """

  # Method 2
  return input == input[::-1]

if is_palindrome(input_string):
  print "This string is a palindrome"
else:
  print "This string is not a palindrome"
