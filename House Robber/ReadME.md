### You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

### Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

### Example 1: Input: nums = [1, 2, 3, 1] , Output: 4 , Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.


#### in [1, 2, 3, 1] each integer represents a house, we cannot rob two houses that are adjacent (next to) each other, if I rob house 1 (index 0) I can only rob house 3 (index 2) and house 4 (index 3). 

#### I'm at index 0 I have one house I either can rob this house or rob no house at all.

#### then I move forward to index 1, I have 2 houses, I can either rob house 1 or house 2 or no houses the max here is to only rob house index 1, I cannot rob house 1 and house 2 together because they're next to each other.

#### then I move forward to index 2, I have 3 houses I can either rob houses 1 and 3 (index 0 and 2) or house 2 (index 1) the max here is houses 1 and 3 which gives me a total of 4.

#### then I move forward to house 4 (index 3), I have 4 houses, I can either rob house index 3 and house index 0 or house index 3 and index 1 which the max is house index 3 and 1 which gives me a total of 3.

#### the max between all is house index 1 and house index 3 which gives us a total of 4.