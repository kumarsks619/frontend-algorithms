// method 1: by using in-built javascript functions
const reverseString1 = (str = '') => {
    let reversedString = ''

    const arrayOfFragments = str.split('') // NOTE: splitting based on nothing (NOT a space)

    reversedString = arrayOfFragments.reverse().join('')

    // arrayOfFragments.forEach((fragment) => {
    //     reversedString = fragment + reversedString
    // })

    return reversedString
}

console.log(reverseString1('Hey my name is Shubham'))

// method 2: by using reduce
const reverseString2 = (str = '') => {
    return str.split('').reduce((revStr, curr) => curr + revStr, '')
}

console.log(reverseString2('Hey my name is Shubham'))

// method 3: by mutating the string directly <--- this method won't work (WRONG method in javascript)
const reverseString3 = (str = '') => {
    let l = 0,
        u = str.length - 1

    while (l < u) {
        let temp = str[u]
        str[u] = str[l] // this won't work
        str[l] = temp

        l++
        u--
    }

    return str
}

console.log(reverseString3('Hey my name is Shubham')) // NOTE: this won't work as STRINGS ARE IMMUTABLE IN JAVASCRIPT
