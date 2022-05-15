const twoSums = (array, goal) => {
    let hashmap = {}
    for (let i = 0; i < array.length; i++) {
        let diff = goal - array[i]
        if (diff in hashmap) {
            return [hashmap[diff], i]
        }
        hashmap[array[i]] = i
    }
    return
}

console.log(twoSums([2, 7, 11, 15], 9))
console.log(twoSums([2, 1, 5, 3], 4))