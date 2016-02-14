# http://www.practicepython.org/exercise/2014/03/26/08-rock-paper-scissors.html

"""
Make a two-player Rock-Paper-Scissors game.
(Hint: Ask for player plays (using input),
compare them, print out a message of congratulations to
the winner, and ask if the players want to start a new game)

Remember the rules:

Rock beats scissors
Scissors beats paper
Paper beats rock
"""

def request_options(player_number):
  print "0: Rock, 1: Paper, 2: Scissors"
  option = int(raw_input("Player " + str(player_number) + ": Please pick an option: "))
  return option

def check_win(player1, player2):
  if (player1 == 0 and player2 == 2) or \
  (player1 == 2 and player2 == 1) or \
  (player1 == 1 and player2 == 0):
    return 1
  elif (player2 == 0 and player1 == 2) or \
  (player2 == 2 and player1 == 1) or \
  (player2 == 1 and player1 == 0):
    return 2
  return 0 # draw

game = True
while game:
  print "Welcome to Rock-Paper-Scissors game!"
  player1 = request_options(1)
  player2 = request_options(2)

  who_win = check_win(player1, player2)
  if who_win == 0:
    print "It's a draw!"
  else:
    print "Player " + str(who_win) + " wins!"

  new = raw_input("Do you want to start a new game? (y/n) ")
  if new == "n":
    game = False #break the loop
