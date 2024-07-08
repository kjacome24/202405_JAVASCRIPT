import MiComponente from './12_math.mjs';

//////Litle test to check destructuring isntead of calling MiComponente every time. 
const {multiplicar , dividir} = MiComponente;
console.log(multiplicar(2,3))

const result1 = MiComponente.multiplicar(5, 3);
console.log(result1); // Salida: 15

const result2 = MiComponente.dividir(10, 2);
console.log(result2); // Salida: 5