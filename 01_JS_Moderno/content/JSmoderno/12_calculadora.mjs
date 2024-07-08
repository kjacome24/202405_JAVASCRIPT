// archivo calculadora.mjs
import { multiplicar, dividir } from './12_mathOperaciones.mjs';
import MiComponente from './12_math.mjs';

const result1 = multiplicar(5, 3);
console.log(result1); // Salida: 15

const result2 = dividir(10, 4);
console.log(result2); // Salida: 2.5



const result3 = MiComponente.multiplicar(5, 3);
console.log(result1); // Salida: 15

const result4 = MiComponente.dividir(10, 4);
console.log(result2); // Salida: 2.5
