# http://www.practicepython.org/exercise/2014/04/16/11-check-primality-functions.html

"""
Ask the user for a number and determine whether the number
is prime or not. (For those who have forgotten, a prime number
is a number that has no divisors.). You can (and should!)
use your answer to
[Exercise 4](/exercise/2014/02/26/04-divisors.html to help you. Take this opportunity to practice using functions, described below.
"""

number = int(raw_input("Please enter a number: "))

def is_prime(number):
  if number < 2:
    return False
  for i in range(2, number):
    if number % i == 0:
      return False
  return True

if is_prime(number):
  print "This is a prime number!"
else:
  print "This is not a prime number"
