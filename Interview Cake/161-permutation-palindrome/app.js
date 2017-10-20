'use strict';

const assert = require('assert');

const palindrome = (str) => {
  const occurences = [];

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const index = occurences.indexOf(c);

    if (index != -1) {
      occurences.splice(index, 1)
    } else {
      occurences.push(c)
    }
  }

  return occurences.length <= 1;
};

assert(palindrome('civic') == true, '"civic" should return True');
assert(palindrome('ivicc') == true, '"ivicc" should return True');
assert(palindrome('civil') == false, '"civil" should return False');
assert(palindrome('livci') == false, '"livci" should return False');
