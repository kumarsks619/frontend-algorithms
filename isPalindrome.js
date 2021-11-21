const isPalindrome = (str = '') => {
    let isPal = true
    const arrayOfFragments = str.toLowerCase().split('')
    const totalFragments = arrayOfFragments.length

    // every(): same as forEach but can be broke by returning false else return true to keep iterating
    arrayOfFragments.every((fragment, index) => {
        if (fragment === arrayOfFragments[totalFragments - 1 - index]) {
            return true
        } else {
            isPal = false
            return false
        }
    })

    return isPal
}

console.log(isPalindrome('was it a car or a cat I saw'))
console.log(isPalindrome('was it a car oo rac a ti saw'))

// method 2: by using built-in methods
const isPalindrome2 = (str = '') => {
    const revStr = str.split('').reverse().join('')

    return str === revStr
}

console.log(isPalindrome2('test'))
console.log(isPalindrome2('madam'))
