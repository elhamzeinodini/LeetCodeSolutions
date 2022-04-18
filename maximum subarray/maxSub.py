from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSub = nums[0]
        currentSum = 0
        for n in nums:
            if currentSum < 0 :
                currentSum = 0
            currentSum += n
            maxSub = max(maxSub,currentSum)
        return maxSub