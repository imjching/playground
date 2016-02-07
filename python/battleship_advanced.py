# Making a two player game?
# Creating battleships of different sizes? (Ensure that it doesn't go beyond boundaries)
# Statistics?

from random import randint

# Generate board
board = []

for x in range(5):
    board.append(["O"] * 5)

def print_board(board):
    for row in board:
        print " ".join(row)

# Print initial board
print "Let's play Battleship!"
print_board(board)

# Generate battleships
def random_row(board):
    return randint(0, len(board) - 1)

def random_col(board):
    return randint(0, len(board[0]) - 1)

# Generate two battleships
battleships = []

def is_target(ships, row, col):
    for item in ships:
        if item[0] == row and item[1] == col:
            return True
    return False

for i in range(2):
    ship_row = random_row(board)
    ship_col = random_col(board)

    # Ensure that there are no duplicates
    while not is_target(battleships, ship_row, ship_col):
        battleships.append([ship_row, ship_col])

print battleships #cheat

# Ten turns
for turn in range(10):
    print "Turn", turn + 1
    guess_row = int(raw_input("Guess Row:"))
    guess_col = int(raw_input("Guess Col:"))

    if (guess_row < 0 or guess_row > 4) or \
        (guess_col < 0 or guess_col > 4):
            print "Oops, that's not even in the ocean."
    elif is_target(battleships, guess_row, guess_col):
        board[guess_row][guess_col] = "X"
        battleships.remove([guess_row, guess_col])
        if len(battleships) > 0:
            print "One down! One more to go!"
        else:
            print "Congratulations! You sunk all my battleships!"
            break
    elif(board[guess_row][guess_col] == "X"):
        print "You guessed that one already."
    else:
        print "You missed my battleship!"
        board[guess_row][guess_col] = "X"
    if turn == 3:
        print "Game Over"
    print_board(board)

