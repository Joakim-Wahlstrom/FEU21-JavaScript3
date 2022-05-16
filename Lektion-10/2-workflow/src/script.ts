// let firstName: string = 'joakim'


const add = (num1: number, num2: number, num3?: number): number => {
    if(num3) {
        return num1 + num2 + num3
    } else {
        return num1 + num2
    }
}

const add2 = (num1: number, num2: number, num3: number = 0): number => {
    if(num3) {
        return num1 + num2 + num3
    } else {
        return num1 + num2
    }
}

console.log(add(5, 10))
console.log(add2(5, 10))

let fn: (a: string, b: number) => void

fn = (name: string, age: number) => {

}


// TYPE ALIAS
type uid = string | number

type user = {
    name: string,
    userId: uid
}


const user1: user = {
    name: 'Hans',
    userId: '123wsdw'
}
const user2: user = {
    name: 'Joakim',
    userId: '123wasdsff'
}

interface IPerson {
    name: string,
    age: number
}

const user3: IPerson = {
    name: 'Joakim',
    age: 35
} 

console.log(user1)
console.log(user3)