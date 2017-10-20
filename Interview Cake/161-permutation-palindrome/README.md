# 161 - Permutation Palendrome

https://www.interviewcake.com/question/python/permutation-palindrome

Write an efficient function that checks whether any permutation of an input string is a palindrome. 

You can assume the input string only contains lowercase letters.

Examples:

* "civic" should return True
* "ivicc" should return True
* "civil" should return False
* "livci" should return False

## Solution

The problem asks us to not only verify that the string is a palindrome, but also that the *permutations* of the string are also palendromes. Since palendromes are symetrical, my thought was that every character in the string should be represented an even amount of times, except for odd numbered strings.

For example `radar` has an even number of `r` and `a` and only one `d`, but `rigid` has an odd number of `r`, `g`, and `d`. Only `i` is occurs evenly, so its permutations are not palindromes.

By mapping each occurence of a letter into an array, and popping it out if we find a double, we only need to evaluate if the remaining size of the array is less than 1.

It's an O(n) function, for those who are interested in that stuff.

## Running Examples

### JavaScript
  `node app.js`
