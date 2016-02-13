# http://www.practicepython.org/exercise/2014/02/05/02-odd-or-even.html

"""
Ask the user for a number. Depending on whether the number
is even or odd, print out an appropriate message to the user.
Hint: how does an even / odd number react differently when
divided by 2?

Extras:

Ask the user for two numbers: one number to check
(call it num) and one number to divide by (check).
If check divides evenly into num, tell that to the user.
If not, print a different appropriate message
"""

num = int(raw_input("Please enter a number: "))
check = int(raw_input("Please enter a number to divide: "))

if num % check == 0:
  print "This number divides appropriately by " + str(check)
else:
  print "Oh no!"
