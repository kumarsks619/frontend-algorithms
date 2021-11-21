const maxOccurrence = (arr = []) => {
    let hashMap = {}

    arr.forEach((item) => {
        hashMap[item] = hashMap[item] ? hashMap[item] + 1 : 1
    })

    let maxKey = ''
    let maxOccur = 0

    Object.keys(hashMap).forEach((key) => {
        if (hashMap[key] > maxOccur) {
            maxOccur = hashMap[key]
            maxKey = key
        }
    })

    return maxKey
}

console.log(maxOccurrence(['a', 'b', 'c', 'a', 'b', 'c', 'c']))
console.log(maxOccurrence(['a', 'b', 'c']))
