const isAnagram = (str1 = '', str2 = '') => {
    if (str1.length !== str2.length) return false

    const str1Sorted = str1.toLowerCase().split('').sort().join('')
    const str2Sorted = str2.toLowerCase().split('').sort().join('')

    return str1Sorted === str2Sorted
}

console.log(isAnagram('Elbow', 'Below'))
console.log(isAnagram('Hello', 'House'))
