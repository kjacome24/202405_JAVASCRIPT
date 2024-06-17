////-----------Destructuring a dictionary or an object
const person = {
    name: 'John',
    age: 30
};

const { name, age } = person;

console.log(name, age); // John 30

////with an arrary list
const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;

console.log(a, b, c, d, e); // 1 2 3 4 5