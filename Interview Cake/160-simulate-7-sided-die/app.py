import random

def rand7():

  while True:
    roll1 = (rand5()-1) * 5
    roll2 = rand5()-1

    outcome =  roll1 + roll2 + 1

    # if we roll over 21, we try again
    if outcome > 21:
      continue

    return outcome % 7 + 1

def rand5():
  return random.randint(1, 5)  

for _ in range(10):
  print rand7()
