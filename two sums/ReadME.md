### problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
### example: given nums = [2, 7, 11, 15] & target = 9 because nums[0] + nums[1] = 9, return [0,1].
### you may assume that each input would have exactly one solution, and you may not use the same element twice.
### [-2, 1, -3, 4, -1, 2, 1, -5, 4] - target = 4

#### solution: we're guaranteed that there's exactly one solution, so we don't have to worry about either having a solution or multiple solutions. the most intuitive way of solving this problem is basically just checking every combination of two values that match the target.

#### we're at index = 0, we scan through the remainder of the array to find a number that add up to 2 equals 4, none of them can do that. at index = 1, we have index = 3 and 1 + 3 = 4, we don't have to check values before index = 1, those values are checked in previous steps, the run time of this algorithem is not super efficient, we're going through the entire array with the length of n and we're gonna do the worse case n times for each number or o(n^2).

#### there's a pattern here, at index = 1 we have the value = 1 and we're looking for value = 3 so that 3 + 1 = 4 and basically we are looking for (target - start), we don't have to check each value in our array, we just create a hashmap :

index | value 
:---: | :---:  
2 | 0  
1 | 1  
5 | 2   

#### we wanna make sure whether (target-start) exists in our hashmap or not, in the first iteration we look for (4 - 2 = 2), at first our hashmap is empty, we have 2 in our array so we put 2 and its index in our hashmap, in second iteration we have (4 - 1 = 3), we have 2 in our hashmap and 3 exists in our array so we add 1 and its index to our hashmap, in the third iteration we look for (4 - 5 = -1), -1 doesn't exist in our hashmap so we add 5 and its index, in the fourth iteration we look for (4 - 3 = 1), we have 1 in our hashmap, we found our values 1,3 and indies: [1,3].

#### time complexity : O(n)

#### memory complexity : O(n), because of hashmap