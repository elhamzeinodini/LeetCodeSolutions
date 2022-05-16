# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
        
        
class Solution:
    def mergeLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummyNode = ListNode()
        tail = dummyNode
        
        # while l1 and l2 are not null
        while l1 and l2:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next
            
        # if l1 is not null
        if l1:
            tail.next = l1
        elif l2:
            tail.next = l2
        return dummyNode.next