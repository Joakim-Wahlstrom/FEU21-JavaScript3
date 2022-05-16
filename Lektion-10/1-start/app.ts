// console.log('hej')
let firstName = 'Joakim';
let age = 35;
let isActive = true

firstName = 'Hans'

console.log(firstName)


const add = (num1, num2) => {
    return +num1 + +num2
}

console.log(add('10', '5'))

const add2 = (num1: number, num2: number): number => {
    return num1 + num2
}

// console.log(add2('10', '5'))
console.log(add2(10, 5))


let names = ['Joakim', 'Hans', 'Tommy']

names.push('Jeanette')
// names.push(34)

let mix = ['joakim', 35, true]

mix.push(34)


let user = {
    name: 'Joakim',
    age: 35,
    isActive: true
}

// user.name = 245
user.name = 'Hans'
// user.address = 'hemma'