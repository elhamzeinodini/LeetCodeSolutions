from typing import List


class Solution:
    def houseRobber(self, nums: List[int]) -> int:
        rob1, rob2 = 0 , 0
        # [rob1,rob2,n,n+1,...]
        for n in nums:
            temp = max(n + rob1, rob2)
            # move forward to the next
            rob1 = rob2
            rob2 = temp
        return rob2