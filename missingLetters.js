// function to print all the missing letters in a giving sequence of string
const missingLetters = (str = '') => {
    let charCode = str.charCodeAt(0)
    let missing = []

    str.split('').forEach((char) => {
        const currCharCode = char.charCodeAt(0)
        if (charCode !== currCharCode) {
            while (charCode < currCharCode) {
                missing.push(String.fromCharCode(charCode))
                charCode++
            }
        }
        charCode++
    })

    return missing.join('')
}

console.log(missingLetters('abcdeghjkn'))
