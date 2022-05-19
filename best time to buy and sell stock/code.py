from typing import List


class Solution:
    def maxProfit(self, prices:List[int]) -> int:
        l, r = 0,1
        # left is buy, right is sell
        maxProfit = 0
        # while our right is not equal to end of the array
        while r < len(prices):
            if prices[l] < prices[r] :
                profit = prices[l] - prices[r]
                maxProfit = max(maxProfit, profit)
            else:
                l = r
            # regardless of this condition, we're updatig right
            r += 1
        return maxProfit