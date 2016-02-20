# http://www.practicepython.org/exercise/2014/03/05/05-list-overlap.html

"""
Take two lists, say for example these two:

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
and write a program that returns a list that contains only
the elements that are common between the lists
(without duplicates). Make sure your program works on
two lists of different sizes.

Extras:

Randomly generate two lists to test this
"""

from random import randint

# Old school way
a = []
for i in range(randint(1, 30)):
  a.append(randint(1, 15))

b = []
for i in range(randint(1, 30)):
  b.append(randint(1, 15))

print a
print b

## Method 1
new_list = []
for i in a:
  if i in b and i not in new_list:
    new_list.append(i)

print sorted(new_list)

## Method 2
from sets import Set
a = Set(a)
b = Set(b)

print list(a & b)
