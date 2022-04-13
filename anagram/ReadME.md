### problem : given two strings s and t, return true if t is an anagram of s,and false otherwise.
### example : s = "anagram", t = "nagaram" , output : true

### solution1 : s is an anagram of t, if with each letter of s we can create t
### s or "anagram" contains aaa,n,g,r,m. we're gonna have 2 hashmaps:

S | occurrence | t | occurrence 
--- | :---: | --- | :---: 
a | 3 | a | 3
n | 1 | n | 1
g | 1 | g | 1
r | 1 | r | 1
m | 1 | m | 1

### by iterating through each letter in s and compare them with t we realize that s and t are the same, same letters same length and that's why they're anagrams.
### time complexity : O(s+t) 
### memory complexity : O(s+t)

### solution2 : if we put s and t in a sorted order then s = "aaagmnr" and t = "aaagmnr", the are anagrams
### time complexity : o(1), we assumed sorting doesn't take extra space