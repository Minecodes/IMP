import random
import math

jumps = []
jump = 0
longest = 0
average = 0

# Jump lengths for the frog
for i in range(10):
    jump = random.randint(0,20)
    jumps.append(jump)
    if jump > longest:
        longest = jump
    print("The frog jumped %d cm" % jump)

# Calculate the average jump length
for i in range(len(jumps)):
    average += jumps[i]
average = math.floor(average / len(jumps))

# Print the results
print("The frog jumped", jumps)
print("The longest jump was %d cm" % longest)
print("The average jump was %d cm" % average)