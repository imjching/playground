# http://www.practicepython.org/exercise/2014/04/02/09-guessing-game-one.html

"""
Generate a random number between 1 and 9 (including 1 and 9).
Ask the user to guess the number, then tell them whether they
guessed too low, too high, or exactly right.

(Hint: remember to use the user input lessons from the very
first exercise)

Extras:

Keep the game going until the user types exit

Keep track of how many guesses the user has taken, and when
the game ends, print this out.
"""

from random import randint

random_number = randint(1, 9)
print random_number #cheat
comparable = int(raw_input("Guess a number: ")) - random_number

if comparable == 0:
  print "Exactly right!"
elif comparable > 0:
  print "Too high!"
else:
  print "Too low!"
