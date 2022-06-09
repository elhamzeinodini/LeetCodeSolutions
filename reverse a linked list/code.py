# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def reverseLinkedList(self, head: ListNode) -> ListNode:
        prev , curr = None , head
        while curr :
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev