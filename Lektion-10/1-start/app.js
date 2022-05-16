// console.log('hej')
var firstName = 'Joakim';
var age = 35;
var isActive = true;
firstName = 'Hans';
console.log(firstName);
var add = function (num1, num2) {
    return +num1 + +num2;
};
console.log(add('10', '5'));
var add2 = function (num1, num2) {
    return num1 + num2;
};
// console.log(add2('10', '5'))
console.log(add2(10, 5));
var names = ['Joakim', 'Hans', 'Tommy'];
names.push('Jeanette');
// names.push(34)
var mix = ['joakim', 35, true];
mix.push(34);
var user = {
    name: 'Joakim',
    age: 35,
    isActive: true
};
// user.name = 245
user.name = 'Hans';
// user.address = 'hemma'
