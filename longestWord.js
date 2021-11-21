const longestWord = (sentence = '') => {
    // creating words array from the sentence (as well as removing punctuation)
    const wordsArray = sentence.toLowerCase().match(/[a-z0-9]+/g)

    // sorting words array based on each word length
    const sortedWordsArray = wordsArray.sort((a, b) => b.length - a.length) // highest to lowest

    // getting all the words with maximum length
    const longestWords = sortedWordsArray.filter(
        (word) => word.length === sortedWordsArray[0].length
    )

    return longestWords
}

console.log(longestWord("Hey! I'm VeNoM. I want to play football but writing code."))
