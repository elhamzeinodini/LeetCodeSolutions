const solution = (array) => {
    let currentSum = 0
    let maxSub = array[0]
    array.forEach((item) => {
        if (currentSum < 0) {
            currentSum = 0
        }
        currentSum += item
        maxSub = Math.max(maxSub, currentSum)
    })
    return maxSub
}


console.log(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]))