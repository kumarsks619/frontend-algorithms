const chunkArray = (arr = [], size = 1) => {
    let chunk = []
    let arrayOfChunk = []

    arr.forEach((item) => {
        chunk.push(item)
        if (chunk.length === size) {
            arrayOfChunk.push(chunk)
            chunk = []
        }
    })

    // to push the incomplete chunk
    if (chunk.length !== 0) {
        arrayOfChunk.push(chunk)
    }

    return arrayOfChunk
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3))
