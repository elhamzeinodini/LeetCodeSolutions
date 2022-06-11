class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
        
class Solution:
    def diameter(self, root:TreeNode) -> TreeNode :
        res = [0]
        def dfs(root):
            # if root is null
            if not root:
                return -1
            # otherwise we're gonna calculate the left and right subtrees
            left = dfs(root.left)
            right = dfs(root.right)
            res[0] = max(res[0], 2 + left + right)
            return 1 + max(left + right)
        dfs(root)
        return res[0]