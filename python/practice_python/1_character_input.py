# http://www.practicepython.org/exercise/2014/01/29/01-character-input.html

"""
Create a program that asks the user to enter their name and
their age. Print out a message addressed to them that tells
them the year that they will turn 100 years old.

Extras:

Add on to the previous program by asking the user for
another number and printing out that many copies of the
previous message. (Hint: order of operations exists in Python)

Print out that many copies of the previous message on
separate lines.
(Hint: the string "\n is the same as pressing the ENTER button)
"""

from datetime import date

name = raw_input("Please enter your name: ")
age = int(raw_input("Please enter your age: "))
times = int(raw_input("Please enter a favorite number: "))

years_remaining = 100 - age

year = date.today().year + years_remaining

for i in range(times):
  print "Hello %s! You will turn 100 years old by the end of %s." % (name, year)
