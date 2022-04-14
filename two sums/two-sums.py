from typing import List


class solution :
    def twoSum(self, nums: List[int], target: int) -> List[int] :
        prevMap = {}
        for index,value in enumerate(nums):
            diff = target - value
            if diff in prevMap:
                return [prevMap[diff], index]
            prevMap[value] = index
            # since we're guaranteed to have a solution we don't have to return anything
        return