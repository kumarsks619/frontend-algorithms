const capitalize = (str = '') => {
    let capitalized = ''
    const arrayOfFragments = str.split(' ')

    arrayOfFragments.forEach((fragment) => {
        capitalized = capitalized + ' ' + fragment[0].toUpperCase() + fragment.slice(1)
    })

    return capitalized.trim()
}

console.log(capitalize('hey there my friend'))

// method 2: by using Regex
const capitalize2 = (str = '') => {
    return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase())
}

console.log(capitalize2('hey there my friend'))
