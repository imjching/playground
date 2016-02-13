# http://www.practicepython.org/exercise/2014/02/15/03-list-less-than-ten.html

"""
Take a list, say for example this one:

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
and write a program that prints out all the elements of the
list that are less than 5.

Extras:

Instead of printing the elements one by one, make a new
list that has all the elements less than 5 from this list
in it and print out this new list.

Write this in one line of Python.
Ask the user for a number and return a list that contains
only elements from the original list a that are smaller
than that number given by the user.
"""

# First part
list_ = input("Please input a list: ")

for i in list_:
  if i < 5:
    print i

# Second part
list_2 = input("Please input another list: ")
new_list = []

for i in list_2:
  if i < 5:
    new_list.append(i)

print new_list

# Third part (List comprehension)
num = int(raw_input("Now enter a number: ")); print [i for i in list_ if i < num]
