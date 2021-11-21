// function to return sum of all prime numbers upto N (including N)
const sumPrimes = (N = 2) => {
    let sum = 0

    const isPrime = (num = 2) => {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }

    return sum
}

console.log(sumPrimes(10))
