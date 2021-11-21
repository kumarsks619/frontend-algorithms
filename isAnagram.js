// helper function: to remove all the characters except word characters (a-z, A-Z, 0-9, underscore)
const formatString = (str = '') => str.replace(/[^\w]/g, '')

const isAnagram = (str1 = '', str2 = '') => {
    // if (str1.length !== str2.length) return false

    const str1Sorted = formatString(str1).toLowerCase().split('').sort().join('')
    const str2Sorted = formatString(str2).toLowerCase().split('').sort().join('')

    return str1Sorted === str2Sorted
}

console.log(isAnagram('Elbow', 'Below'))
console.log(isAnagram('Hello', 'House'))
console.log(isAnagram('Dormitory', 'dirty room'))
