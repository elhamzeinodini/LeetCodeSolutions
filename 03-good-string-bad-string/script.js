// Joe has two strings, s and t, which are both made up of lowercase English letters.
// He loves the string s very much and dislikes the string t.
// He is looking for a string of length n such that this string consists of lowercase English letters,
// s is a substring of it, and t is not a substring of it.

// Help him find such a string and print a valid example. If such a string does not exist, print -1.

// A string a is a substring of string b if and only if there exists a contiguous segment of string\
//  b that is equal to string a.

// "hamcode" is not a substring of "hamkaran" because the sequence "hamcode" does not appear
// consecutively in "hamkaran"

function generateMainString(len, sLen) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const mainString = [];
  const attempt = len - sLen;

  for (let i = 0; i < attempt; i++) {
    const index = Math.floor(Math.random() * len + 1);
    mainString.push(chars[index]);
  }

  return mainString.join("");
}

function findValidString(s, t, len) {
  if (len < s.length) return -1;

  if (len === s.length) {
    return s.includes(t) ? -1 : s;
  }

  const generatedMainString = generateMainString(len, s.length);
  console.log("1: ", generatedMainString);
  const mainString = s + generatedMainString;
  console.log(mainString);

  if (mainString.includes(s) && !mainString.includes(t)) return mainString;
  else return -1;
}

module.exports = {
  findValidString,
};
