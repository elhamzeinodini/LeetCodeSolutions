#### Given an integer array : nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


#### example: input = [-2, 1, -3, 4, -1, 2, 1, -5, 4] , output = 6 
#### explanation = [4, -1, 2, 1] has the largest sum = 6

<br/>

##### solution1 : the first thing you might try is to compute every single subarray, we're at index 0, we have 9 subarrays, we can repeat this process for every number in our array, the pseudo code is sth like this:

<br/>

```
    for(i=0 ... n-1){
        for(j=i ... n-1){
            for(k=i...j){
                <!-- computed the sum -->
            }
        }
    }
```

<br/>

##### i represents the start and j represents the end of an array, we want to computed the sum of subarrays so we need a third loop, time complexity is O(n^3) because we have 3 loops.

<br/>

##### solution2 : let's say we have the sum of these subarrays: [-2, 1, -3, 4] we can save time by saving the sum of these subarrays into a variable called "currentSum" and then for the next subarray I can say "(currentSum + (-1))", the pesudo code :

<br/>

```
for(i=0...n-1){
    for(j=i...n-1){
        currentSum + num[j]
    }
}
```
<br/>

##### we have 2 for loops and it gives us O(n^2) as the time complexity.


##### solution3 : the question you might ask is do we have to start at every single value and compute every single subarray to the end? no we don't! we're trying to get the maximum subarray, so at index 0 the maximum is -2 so far, then we get to index 1 , we have (-2 + 1 = -1) and the max = -1, do we actually need this negative number in order to get the maximum subarray ? no the negative number doesn't help us to get the maximum value so we can ignore that index 0 or that -2 prefix and start at index 1 now our (max = 1), then we get to index 2 so our max is (1 - 3 = -2) then we have index 3, again we have a negative prefix or -2 and a positive number or 4 so we can again ignore that -2 prefix because it doesn't help us finding the maximum, now we are at index 4, we have (max = 4), and index 4 contains a negative subarray but the prefix is positive, we don't ignore positive values so the max is (4 - 1 = 3) then we're at index 5 and it's a positive value so we add it to (max = 3) and we have (max = 2 + 3 = 5), then we get to (index = 6) and it's again a positive subarray so we have (max = 5 + 1 = 6) then we get to (index = 7) we have (6 - 5 = 1) the max's been decreased notice that if I ignore -5 because it's a negative prefix I have to ignore what's before that, then we have (1 + 4 = 5),so we can see the max subarray is the middle portion of our array or [4,-1,2,1] which totaled 6.


##### we go through the array and left is being shifted if the value is negative, it's a linear algorithem so the time complexity is O(n), we need no extra memory so memory complexity is O(1).