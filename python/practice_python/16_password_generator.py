# http://www.practicepython.org/exercise/2014/05/28/16-password-generator.html

"""
Write a password generator in Python. Be creative with how you generate passwords
 - strong passwords have a mix of lowercase letters, uppercase letters, numbers,
 and symbols. The passwords should be random, generating a new password every time
the user asks for a new password. Include your run-time code in a main method.

Extra:

Ask the user how strong they want their password to be. For weak passwords,
pick a word or two from a list.
"""

from random import randint

def generate_password(length):
  alpha = "abcdefghijklmnopqrstuvwxyz"
  numbers = "1234567890"
  symbols = "!@#$%^&*()_+-="
  everything = alpha + numbers + symbols

  password = ""

  while len(password) != length:
    password += randint(0, len(everything) - 1)

  if check_password(password): #valid/secure
    return password

def main():
  print "Generating password..."

  password_length = -1
  while True:
    password_length = int(raw_input("What's your password length? (min 4)"))
    if password_length < 4:
      print "Password length must be more than or equals to 4"
    else:
      break







main()