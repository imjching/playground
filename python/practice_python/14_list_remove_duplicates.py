# http://www.practicepython.org/exercise/2014/05/15/14-list-remove-duplicates.html

"""
Write a program (function!) that takes a list and returns a new
list that contains all the elements of the first list minus all
the duplicates.

Extras:

Write two different functions to do this - one using a loop and
constructing a list, and another using sets.
Go back and do Exercise 5 using sets, and write the solution
for that in a different function.
"""

from sets import Set

def unique_elements_loop(_list):
  new_list = []
  for i in _list:
    if i not in new_list:
      new_list.append(i)
  return new_list

def unique_elements_sets(_list):
  return list(Set(_list))

print unique_elements_loop([1, 2, 3, 3, 3, 3])
print unique_elements_sets([1, 2, 3, 3, 3, 3])
