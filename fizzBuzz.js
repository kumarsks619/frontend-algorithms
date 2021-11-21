/* FizzBuzz:
    For numbers 1 to N:-
    1) If divisible by 2 ---> print "fizz"
    2) If divisible by 3 ---> print "buzz"
    3) If divisible by both 2 and 3 ---> print "fizzbuzz"
*/

const fizzBuzz = (num = 1) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0) console.log('fizzbuzz')
        else if (i % 2 === 0) console.log('fizz')
        else if (i % 3 === 0) console.log('buzz')
        else console.log(i)
    }
}

fizzBuzz(15)
