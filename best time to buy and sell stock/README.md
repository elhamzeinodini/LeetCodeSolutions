#### say you have an array which the ith element is the price of a given stock on day i.

#### if you were only permitted to complete at most one transaction (buy one and sell one share of the stock) design an algorithm to find the maximum profit, note that you cannot sell a stock before you buy one.

#### input: [7,1,5,3,6,4] , output: 5 

<br>

##### each value represents the price of the stock at a particular day, the lowest price is on day 2 (index 1) and the highest is on day 5, so 6-1=5 but why not choosing 7-1=6 ? we cannot go back in time, days' direction is from left to right.

##### so we're gonna set a left pointer and a right pointer, left is the day we buy and right is the day we sell, for day one and two (7 and 1) we buy at 7 we sell at 1, 1-7=-6 which is not good, if left is greater than right pointer we move both the left and the right pointers, one step.

##### at day two and three (1 and 5), we buy at 1 we sell at 5 so the profit is 5-1 = 4, so our current max profit is 4, our left pointer is less than our right pointer so we only move the right pointer.

##### next, left pointer is on 1 and right pointer is on 3, profit 3-1 = 2, 2 is less than 4 so our max profit is still 4.

##### next, left pointer is on 1 and right pointer is on 6, progit = 5, we change our max profit to 5.

##### next, left pointer is 1 and right pointer is 4 , profit = 3 so the max profit remains equals to 5.



##### memory complexity : o(1), time complexity : o(n) linear