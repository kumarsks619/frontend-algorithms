const reverseNumber = (num = 0) => {
    const numberToString = num.toString()

    const reversedString = numberToString.split('').reverse().join('')

    let reversedNumber = parseInt(reversedString) // NOTE: parseInt() will convert 935- to 935
    // parseInt() is different from Number()

    // if (num < 0) {
    //     reversedNumber = reversedNumber * -1
    // }

    return reversedNumber * Math.sign(num)
}

console.log(reverseNumber(-9587))
console.log(reverseNumber(9587))
