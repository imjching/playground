# http://www.practicepython.org/exercise/2014/04/25/12-list-ends.html

"""
Write a program that takes a list of numbers (for example,
a = [5, 10, 15, 20, 25]) and makes a new list of only the
first and last elements of the given list. For practice,
write this code inside a function.
"""

a = [5, 10, 15, 20, 25]

def make_new_list(old_list):
  if len(old_list) < 3:
    return old_list #same
  b = []
  b.append(old_list[0])
  b.append(old_list[-1])
  return b

print make_new_list(a)
