///////////////////////////////////////////////////////////////////////////////////1. 

const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};
const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);

// 1. 30, undefined
// 2. Anota la salida que muestra el código:
    // 30
    // undefined
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    //Digamos que aqui estamos haciendo una destruturacion anidada y aunque alcanzamos a recibir el valor de la variable edad, salario no existe en el objeto y por eso se muestra como indefinido.

///////////////////////////////////////////////////////////////////////////////////2. 

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

// 1. { a: 1, b: 4, c: 5, d: 6 };
// 2. Anota la salida que muestra el código:
    // { a: 1, b: 4, c: 5, d: 6 }
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    //En este caso aunque estamos uniendo los resultados de objetoa y objeo b, las llaves de los objetos b y c se repiten y son remplazadas por ObjetoB

///////////////////////////////////////////////////////////////////////////////////3. 
function verificar() {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}

verificar();

// 1. 4, ReferenceError
// 2. Anota la salida que muestra el código:
    //4
    // c:\Users\User\OneDrive\Desktop\202405_JAVASCRIPT\01_JS_Moderno\Core\tempCodeRunnerFile.js:9
    // console.log(b); 
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    //Este es un gran ejercicio para entender que var tiene un scope global y que let y const son solo expresiones locales que no pueden ser utilizadas afuera del bloque en el que estan.


///////////////////////////////////////////////////////////////////////////////////4. 
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// 1. 29
// 2. Anota la salida que muestra el código:
    // 29
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    //La razon de que el valor no cambia es la utilizacion de Object.freeze que bloquea cualquier modificacion sin generar error.

///////////////////////////////////////////////////////////////////////////////////5. 
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

// 1. [1,2,3] , [1,2,3,4]
// 2. Anota la salida que muestra el código:
    // [ 1, 2, 3 ]
    // [ 1, 2, 3, 4 ]
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    // Aqui no modificamos el original pero lo que si hacemos es crear una nueva version agregando un nuevo numero.

///////////////////////////////////////////////////////////////////////////////////6. 
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);

// 1.  manzana, naranja
// 2. Anota la salida que muestra el código:
    //manzana
    //naranja
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    //Para obtener el valor del tercer indice debemos agregar la variable tercera en la linea 2. const [primera, segunda, tercera] = frutas;

///////////////////////////////////////////////////////////////////////////////////7. 
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}
// 1. 0, 1, 0, 1, 0, 1
// 2. Anota la salida que muestra el código:
    // 0
    // 1
    // 0
    // 1
    // 0
    // 1
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    // Aqui basicamente estamos reutilizando la misma variable i adentro de los 2 for, lo que forza a que el valor del console.log sea solamente el valor maximo que i puede alcanzar (1) en el for del interior y este sera ejecutado 3 veces desde afuera. 

///////////////////////////////////////////////////////////////////////////////////8. 
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const combinado = { ...objeto1, ...objeto2 };
objeto1.b = 10;
console.log(combinado);

// 1. {a:1 , b: 3, c: 4 }
// 2. Anota la salida que muestra el código:
    // { a: 1, b: 3, c: 4 }
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    // In case we wnat to fix the replacing of varibale b we could use the following const combinado = { ...objeto1, ...objeto2, b : objeto1.b, c: objeto2.b , d : objeto2.c  };

///////////////////////////////////////////////////////////////////////////////////9. 
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

// 1. 1, 2, 3, 3, 4, 5
// 2. Anota la salida que muestra el código:
    // [ 1, 2, 3, 3, 4, 5 ]
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    //A diferencia de un objeto, los arrays no sobrescriben variables y basicamente seria como un concatenar. 

///////////////////////////////////////////////////////////////////////////////////10. 

function demostracion() {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}

demostracion();

// 1. Luis , 25
// 2. Anota la salida que muestra el código:
    // Luis
    // 25
// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio.
    // Excelente ejerciio para comprender el scope de los bloques, y las variables globales con var, aqui originalmente tenemos luis definido con nombre y edad de 35 y luego pasamos por un if que siempre se cumple que tiene declaracion var lo que sobrescribe la variable inclusive si salimos del boloque, pero en cuanto a la edad hay una declaracion con let que se pierde cuando termina el if. 