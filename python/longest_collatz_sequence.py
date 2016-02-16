# A problem on Project Euler that caught my attention
# https://projecteuler.net/index.php?section=problems&id=014

"""
The following iterative sequence is defined for the set of
positive integers:

n -> n/2 (n is even)
n -> 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the
following sequence:

13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
It can be seen that this sequence (starting at 13 and
finishing at 1) contains 10 terms. Although it has not
been proved yet (Collatz Problem), it is thought that all
starting numbers finish at 1.

Which starting number, under one million, produces the
longest chain?

NOTE: Once the chain starts the terms are allowed to go
above one million.
"""

# Using `time python longest_collatz_sequence.py`
# Takes about 33 seconds without caching, 2 seconds with caching
# 837799 is the initial number, with 525 terms in the chain

# Variable
maximum_number = 1000000

initial_number = 1
sequence_length = 1

cache = [-1] * (maximum_number + 1)
cache[1] = 1

for i in range(2, maximum_number + 1):
  next_term = i
  count = 0

  while next_term != 1 and next_term >= i:
    count += 1
    if next_term % 2 == 0:
      next_term /= 2
    else:
      next_term = next_term * 3 + 1

  cache[i] = count + cache[next_term]

  if cache[i] > sequence_length:
    sequence_length = cache[i]
    initial_number = i

print initial_number
print sequence_length
