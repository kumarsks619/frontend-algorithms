// method 1: by using built-in method
const flattenArray = (arr = []) => arr.flat(Infinity)

console.log(flattenArray([1, [2, [3, 4], [5, 6, [7, 8]], 9], 10]))

// method 2: by using recursion
const flattenArray2 = (arr = [], flatArray = []) => {
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            flattenArray2(element, flatArray)
        } else {
            flatArray.push(element)
        }
    })
    return flatArray
}

console.log(flattenArray2([1, [2, [3, 4], [5, 6, [7, 8]], 9], 10]))
