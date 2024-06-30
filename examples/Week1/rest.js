///rest with arrays
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//rest with objects
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);