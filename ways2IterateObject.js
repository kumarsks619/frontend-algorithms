const players = {
    Messi: 10,
    Ronaldo: 7,
    Ramos: 4,
    Pique: 3,
    Neymar: 10,
    'Di Maria': 11,
}

// method 1: for-in
console.log('method 1: for-in ********************************************')
for (const key in players) {
    console.log(key + ': ' + players[key])
}

// method 2: Object.keys()
console.log('method 2: Object.keys() *************************************')
Object.keys(players).map((key) => console.log(key + ': ' + players[key]))

// method 3: Object.values()
console.log('method 3: Object.values() ***********************************')
Object.values(players).map((val) => console.log(val))

// method 4: Object.entries()
console.log('method 4: Object.entries() **********************************')
Object.entries(players).map(([key, val]) => console.log(key + ': ' + val))

// method 5: Object.getOwnPropertyNames()
console.log('method 5: Object.getOwnPropertyNames() ***********************')
Object.getOwnPropertyNames(players).map((key) => console.log(key + ': ' + players[key]))
