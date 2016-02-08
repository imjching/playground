print bin(0b1110 & 0b101)

first = 0b1110
second = 0b101

# Eliminate the 0b, followed by reversing the string
first = list(bin(first)[2::][::-1])
second = list(bin(second)[2::][::-1])

# Normalize them to ensure same length
while len(first) > len(second):
    second.append("0")
while len(second) > len(first):
    first.append("0")

# Now apply & AND
for i in range(len(first)):
    if first[i] == "1" and second[i] == "1":
        first[i] = "1"
    else:
        first[i] = "0"

print bin(int("".join(first[::-1]), 2))