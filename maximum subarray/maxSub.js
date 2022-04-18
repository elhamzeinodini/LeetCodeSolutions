function maxSum(nums) {
    let currentSum = 0
    let maxSub = nums[0]
    nums.forEach((i, a) => {
        currentSum = Math.max(i, currentSum + i)
        maxSub = Math.max(maxSub, currentSum)
    })
    return maxSub
}