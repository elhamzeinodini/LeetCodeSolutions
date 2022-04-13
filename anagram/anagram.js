const solution = (s, t) => {
    if (s.length !== t.length) {
        return false
    }
    return cleanString(s) === cleanString(t)
}



// converts "hello" to e,h,l,l,o
function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}


console.log(solution("anagram", "nagaram"))