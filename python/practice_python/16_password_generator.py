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

def check_password(password):
  alpha = "abcdefghijklmnopqrstuvwxyz"
  numbers = "1234567890"
  symbols = "!@$&*"
  check = [False, False, False, False] # alpha, alpha_upper, numbers, symbols
  for i in password:
    if i in alpha:
      check[0] = True
    elif i in alpha.upper():
      check[1] = True
    elif i in numbers:
      check[2] = True
    else:
      check[3] = True
  return check[0] == check[1] == check[2] == check[3] == True

def generate_password(length):
  alpha = "abcdefghijklmnopqrstuvwxyz"
  numbers = "1234567890"
  symbols = "!@$&*"
  everything = alpha + alpha.upper() + numbers + symbols

  password = ""

  while len(password) != length:
    password += everything[randint(0, len(everything) - 1)]

  if check_password(password): #valid/secure
    return password
  return generate_password(length)

def main():
  print "Generating password..."

  password_length = -1
  while True:
    password_length = int(raw_input("What's your password length? (min 4) "))
    if password_length < 4:
      print "Password length must be more than or equals to 4"
    else:
      break

  print "Your generated password is", generate_password(password_length)

main()