"use strict";
// let firstName: string = 'joakim'
const add = (num1, num2, num3) => {
    if (num3) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
};
const add2 = (num1, num2, num3 = 0) => {
    if (num3) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
};
console.log(add(5, 10));
console.log(add2(5, 10));
let fn;
fn = (name, age) => {
};
const user1 = {
    name: 'Hans',
    userId: '123wsdw'
};
const user2 = {
    name: 'Joakim',
    userId: '123wasdsff'
};
const user3 = {
    name: 'Joakim',
    age: 35
};
console.log(user1);
console.log(user3);
