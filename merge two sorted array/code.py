from typing import List


class Solution:
    # m is the index of the last value in nums1
    # n is the index of the last value in nums2 
    def merge(self, nums1: List[int], nums2: List[int], n: int, m: int) -> None :
        # getting the last index of nums1
        last = m + n - 1
        
        # merge in reverse order
        while m > 0 and n > 0:
            if nums1[m]  > nums2[n] :
                nums1[last] = nums1[m]
                m -= 1
            else:
                nums1[last] = nums2[n]
                n -= 1
            last -= 1
        # fill nums1 with leftover nums2 elements
        while n > 0 :
            nums1[last] = nums2[n]
            n , last = n - 1, last - 1