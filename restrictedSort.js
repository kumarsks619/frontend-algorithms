// function to sort only the positive values without disturbing -1
const restrictedSort = (arr = []) => {
    const blockedIndexes = []
    const sortableVals = []

    arr.forEach((val, index) =>
        val === -1 ? blockedIndexes.push(index) : sortableVals.push(val)
    )

    sortableVals.sort((a, b) => a - b)

    blockedIndexes.forEach((index) => {
        sortableVals.splice(index, 0, -1)
    })

    return sortableVals
}

console.log(restrictedSort([170, -1, 120, 150, -1, 110, -1, 105, 145]))

// splice(arg1, arg2, ...arg3)
// arg1 ---> index at which values need to be inserted
// arg2 ---> no. of elements need to be removed starting from arg1 (index)
// arg3 ---> all the values need to inserted (comma separated line splice(arg1, arg2, arg3, arg4, arg5, .....))
