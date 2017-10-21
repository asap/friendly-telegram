# 160 - Simulate 7 Sided Die

https://www.interviewcake.com/question/python/simulate-7-sided-die?

You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.

## Solution

If you want to use rand5() to get random numbers between 1 and 7, you'll need to run rand5() twice.

One "roll" of a 5 sided dice has 5 possibilities, 1 - 5. However, when rolled twice, you get 25 different possibilities (5! = 5 * 5 = 25). Since we need something that's divisible by 7, we can reroll if we get anything over 21. The remaing values need to be adjusted so we can simulate rolling between 1 and 7.

Because Math.

## Running examples

### Python

Generates 10 random numbers between 1 and 7

`python app.py`
