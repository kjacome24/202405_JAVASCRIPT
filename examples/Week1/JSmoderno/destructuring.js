const superheroe = {
    nombre: 'Wonder Woman',
    alias: 'Diana Prince',
    poderes: ['super fuerza', 'velocidad', 'durabilidad'],
    habilidades: ['combate cuerpo a cuerpo', 'uso del lazo mágico', 'vuelo'],
    creadaPor: 'William Moulton Marston',
    primeraAparicion: 'All Star Comics #8 (1941)',
    cp : {
        hp : 100,
        attack : 85,
        speed : 85
    }

};

const armas = ['Espada de Athena', 'Escudo', 'Lazo de la Verdad', 'Brazaletes indestructibles'];

//////Destructuring
const {nombre, alias, poderes, habilidades , creadaPor : creador /*THis is use to give a new name to the variable  in case we want it*/, primeraAparicion} = superheroe;
console.log(`nombre: ${nombre}, alias:  ${alias}, poderes: ${poderes}, habilidades: ${habilidades}, creado Por: ${creador}, PrimeraAparicion: ${primeraAparicion}`)


///////////////Nested destructuring with arrays inside of an object
const {poderes : [poder1, poder2, poder3]}  = superheroe
console.log(`${poder1} ${poder2} ${poder3}`)

///////////////Nested destructuring with object inside of an object
const {cp : {hp, attack, speed}} = superheroe;
console.log(`${hp} ${attack} ${speed}`)


const superheroe = {
    nombre: 'Wonder Woman',
    alias: 'Diana Prince',
    poderes: ['super fuerza', 'velocidad', 'durabilidad'],
    habilidades: ['combate cuerpo a cuerpo', 'uso del lazo mágico', 'vuelo'],
    creadaPor: 'William Moulton Marston',
    primeraAparicion: 'All Star Comics #8 (1941)',
    codigoSecreto: '12345' // ¿Muy fácil el código de nuestra super amiga, no crees?
};

const armas = ['Espada de Athena', 'Escudo', 'Lazo de la Verdad', 'Brazaletes indestructibles'];
const codigoSecreto = 'ABCDE'; // Acá está el conflicto

const { nombre, alias, poderes, habilidades, creadaPor, primeraAparicion, codigoSecreto: codigoEncriptado } = superheroe; // Acá corregimos el conflicto

console.log(codigoEncriptado) // Salida: 12345


/////

const alterego = {
    nombre: 'Diana',
    apellido: 'Prince',
    email: 'diana.prince@themyscira.com',
    contraseña: 'Am@z0nW@rri0r',
    usuario: 'wonderwoman',
    direcciones: [
    {
        direccion: 'Themyscira Palace',
        ciudad: 'Themyscira',
        codigoPostal: '0001'
    },
    {
        direccion: '7000 Hollywood Blvd',
        ciudad: 'Los Angeles',
        codigoPostal: '90028'
    }
    ],
    creadoEn: 1714866113353
};


const {direcciones : [direccion1, direccion2]} = alterego
console.log(direccion1)


// Si solo desearas extraer la segunda dirección del array de direcciones del objeto ‘alterego’, puedes hacerlo directamente utilizando desestructuración de arrays, omitiendo la primera dirección con una coma. Veamos cómo hacerlo:

const { direcciones } = alterego;
const [ primeraDireccion, segundaDireccion ] = direcciones;

console.log('Primera Dirección:', primeraDireccion);
console.log('Segunda Dirección:', segundaDireccion);

const { direcciones } = alterego;
const [, segundaDireccion] = direcciones;

console.log('Segunda Dirección:', segundaDireccion);



//////////////Operador Spread y patrón Rest
///////////Example spreead with objects
const alex = {
    nombre : "Alex",
    apellido : "Miller",
    edad: 21,
    id : 12345
};


const copiaAlex = {...alex}; //this is the way to use
copiaAlex.pais = "Colombia";
console.log(alex);
console.log(copiaAlex);

///////////Example spreead with arrays
const nombres = ['Alex','Alan','Roberto','Julieta']
const nombres2 = [...nombres];
nombres2.push("Kevin");

console.log(nombres);
console.log(nombres2);

///////////////Example adding elementes directly in the same lien of spread

const alex = {
    nombre : "Alex",
    apellido : "Miller",
    edad: 21,
    id : 12345
};


const copiaAlex = {...alex, pais : "Colombia"}; //this is the way to use
console.log(alex);
console.log(copiaAlex);

///////////////////re-writting of variables

const alex = {
    nombre : "Alex",
    apellido : "Miller",
    edad: 21,
    id : 12345
};
const copiaAlex = {...alex, nombre : "Kevin"}; //this is the way to use
console.log(copiaAlex);


////////////// adding elements
const nombres = ['Alex','Alan','Roberto','Julieta']
const nombres2 = ["Karla",...nombres,"Gustavo"];
nombres2.push("Kevin");

console.log(nombres);
console.log(nombres2);


///////////Join of arrays with spread

const x = [1,2];
const y = [3,4];
const z = [5,6];

const w = [...x,...y,...z]
console.log(w)


///////////spread as input of functions

const calculadora = (largo,ancho,alto) => largo * ancho * alto ;

const dimensions = [5,3,2];

const volumne = calculadora(...dimensions)
console.log(volumne)

/////
// Example of nested spread

const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    propietario: 'Alicia Estevez',
    detalles: [
    {
        vin: '123456789ABCDEF',
        color: 'azul',
        kilometraje: 45000,
        puertas: 5,
        combustible: 'gasolina'
    }
    ],
    registradoEn: 1583945177623
};


const copiaauto = {...auto};
copiaauto.detalles[0].color = "verde";
console.log(auto);
console.log(copiaauto) // in this example even if we did spread, the arrays or objects inside of an array or object will not be afected and are still pointing to the original place of memory

////////////////Using spread inside

const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    propietario: 'Alicia Estevez',
    detalles: [
    {
        vin: '123456789ABCDEF',
        color: 'azul',
        kilometraje: 45000,
        puertas: 5,
        combustible: 'gasolina'
    }
    ],
    registradoEn: 1583945177623
};


const copiaauto = {...auto, detalles : [{...auto.detalles[0]}]};
copiaauto.detalles[0].color = "verde";
console.log(auto);
console.log(copiaauto)


//////////Another example of nested spread

const alterego = {
    nombre: 'Diana',
    apellido: 'Prince',
    email: 'diana.prince@themyscira.com',
    contraseña: 'Am@z0nW@rri0r',
    usuario: 'wonderwoman',
    direcciones: [
    {
        direccion: 'Themyscira Palace',
        ciudad: 'Themyscira',
        codigoPostal: '0001'
    },
    {
        direccion: '7000 Hollywood Blvd',
        ciudad: 'Los Angeles',
        codigoPostal: '90028'
    }
    ],
    creadoEn: 1714866113353
};

const copiaterego = {...alterego, direcciones : [{...alterego.direcciones[0]}, {...alterego.direcciones[1]}]};
copiaterego.direcciones[0].direccion = "P. Sherman 42 Wallaby Way";
console.log(alterego);
console.log(copiaterego);



/////////////////function sumarNumeros
function sumarNumeros(...numeros){
    console.log(numeros);
    
}

sumarNumeros(1,2,3);
sumarNumeros(1,2,3,4);

/////////////////function sumarNumeros2
function sumarNumeros(...numeros){
    let suma = 0;
    for (let i = 0 ; i < numeros.length ; i++){
        suma += numeros[i]
    }
    console.log(suma)
}

sumarNumeros(1,2,3);
sumarNumeros(1,2,3,4);

////////another example

///////////rest as input of functions


const dimensions2 = [5,3,2];
const calculadora = (...dimensions) => {
    let total = 1;
    for (let dimension of dimensions){
        total *= dimension;
    } ;
    return total;
}

const volumne = calculadora(...dimensions2)
console.log(volumne)


////////////////rest with arrays


const dimensions2 = [5,3,2];

const [dimensions2copy, ...resto] = dimensions2;
console.log(dimensions2copy);
console.log(resto);
/////////////////////rest with objects

const estudiante = {
    nombre : "Kevin",
    apellido : "Jacome",
    age : 25,
    pais : "Colombia"
};

const {nombre, apellido,...restofdata} = estudiante;
console.log(nombre,apellido);
console.log(restofdata)