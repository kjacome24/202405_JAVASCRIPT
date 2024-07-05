////////Functional

function despedirse(nombre) {
    return `Adios, ${nombre}`
};

console.log(despedirse("Kevin"));

////////////OOP
class Despedidor {
    constructor(nombre) {
        this.nombre = nombre;
    }
    despedirse(){
        return `Adios, ${this.nombre}`
    }
}

const despedidor = new Despedidor("Kevin");
console.log(despedidor.despedirse());


/////////////////Callback 
let total = 0;
const suma = calificacion => total +=calificacion;

const promedio = (callback,...calificaciones) =>
        {
            
            console.log(calificaciones)
            calificaciones.forEach(callback)
            return total / calificaciones.length
        }

console.log(promedio(suma,1,2,3))

/////////Same excercie using reduce and a faster aproach

const suma = (total, calificacion) => total + calificacion;

const promedio = (callback, ...calificaciones) => {
    let total = calificaciones.reduce(callback, 0);
    return total / calificaciones.length;
}

console.log(promedio(suma, 1, 2, 3)); // Output should be 2



///////////////////Example 3
const student = {
    nombre : "Kevin",
    curso : "MERN",
    calif1: 8.9,
    calif2: 9.3,
    calif3 : 8.7
}

const promedio = (calif1,calif2,calif3)=>{
    return (calif1+calif2+calif3)/3
}

const imprimiinfo = (callback,student) => {
    console.log(student.nombre);
    console.log(student.curso);
    return callback(student.calif1,student.calif2,student.calif3)
}

console.log(imprimiinfo(promedio,student))

//////Example of call back with the expression fn()

let palabras = ["Hola", "Mundo", "OpenAi"];

let convertiraminusculas = palabra => palabra.toLowerCase();

let mapPalabras = (array,fn) => 
{
    for (let i=0 ; i<array.length ; i++){
    array[i] = fn(array[i])
    } 
    return array
}

console.log(mapPalabras(palabras,convertiraminusculas))



///////////Replacemente using .map()

let palabras = ["Hola", "Mundo", "OpenAi"];
let convertiraminusculas = palabra => palabra.toLowerCase();
console.log(palabras.map(convertiraminusculas))



////////////Examplle of .map calculating the length of the strings inside of an array.

let nombres = ["Juan", "María", "Carlos", "Laura", "Ana"];
const longitudNombre = (nombre) => nombre.length;
console.log(nombres.map(longitudNombre))

///Duplicar cada número en un array with .map

let numeros = [1,2,3,4,5];
const duplicar = numero => numero *2;
console.log(numeros.map(duplicar))

//Convertir un array de strings a mayúsculas with .map
let nombres = ["Juan", "María", "Carlos", "Laura", "Ana"];
const tomayus = input => input.toUpperCase();
console.log(nombres.map(tomayus))

////////////////////////////////.filter para palabras con mas de 3 characters
let palabras = ["Hola", "Mundo", "OpenAI", "es", "genial"];
const validator = palabra => palabra.length> 3;
let palabrasfiltradas = palabras.filter(validator)
console.log(palabrasfiltradas);

////////////////Filtrar números mayores que 3
let numeros = [1, 2, 3, 4, 5];
const mayora3 = numero => numero>3;
let copia_numeros = numeros.filter(mayora3);
console.log(copia_numeros)
//////////////Filtrar cadenas que contienen una letra específica
let palabras= ["manzana", "plátano", "uva", "naranja"];
const validator_including = input => input.includes("z");
console.log(palabras.filter(validator_including))

//////////////Filtrar objetos basados en una propiedad
let productos = [
    { nombre: "Manzana", precio: 1500 },
    { nombre: "Plátano", precio: 500 },
    { nombre: "Naranja", precio: 2000 },
];
const validator_price = object_input => object_input.precio< 2000;
console.log(productos.filter(validator_price))

///////////////////For eachhhh
let numeros = [1, 2, 3];
numeros.forEach(numero => console.log(numero));

///////////////Sumar todos los elementos del array
let numeros= [1, 2, 3];
let suma= 0;
numeros.forEach(numero => suma += numero)
console.log(suma)

///////////////Modificar el array original
let numeros= [1, 2, 3];
numeros.forEach((numero,index) => numeros[index] = numero*10);
console.log(numeros)

///////////////Funcion Find 
/////Looking for the first divisable number in 3
let numeros = [10, 20, 30, 40, 50,60];
let divisablefunct = numero => numero % 3 ===0;
console.log(numeros.find(divisablefunct));
/////Veamos otro ejemplo finding name in an array
let personas = [
    { id: 1, nombre: 'Juan', ciudad: 'Buenos Aires' },
    { id: 2, nombre: 'María', ciudad: 'Madrid' },
    { id: 3, nombre: 'Carlos', ciudad: 'México' }
];
const findingname = input => input.nombre==="María";
console.log(personas.find(findingname))



var x = 5;
var y = [[1, 2, 3], [4, 5], [6, 7, 8]];
if (y[1][1] == x) {
    console.log('Correcto');
} else {
    console.log('Incorrecto');
}




/////////////////objetos inmutables

const nombres = ["Alex", "Martha", "Alan", "Julieta"];
const numero = 20;

const estudiante = {
    nombre: "Alejandro",
    apellido: "Miller",
    edad : 21
};

nombres.push("Miguel");
console.log(nombres);



///////////////////////Use of Object.freeze
const nombres2 = Object.freeze(["Alex", "Martha", "Alan", "Julieta"]);
nombres2[2] = "Kevin" //aqui we simple keep the originial value but no error is shown

nombres2.push("Kevin")///Here we have error

///////////////////Example 3

const productos = [
    { id: 1, nombre: 'Camisa', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 30 },
    { id: 3, nombre: 'Zapatos', precio: 50 }
];

Object.freeze(productos)

productos.push({})////As expectewill show error TypeError to be specific

//////////////////Example to prepare playlist

const listaCanciones = Object.freeze([
    { "nombre": "Shape of You",        "genero": "Pop"       },
    { "nombre": "Uptown Funk",         "genero": "Funk"      },
    { "nombre": "Billie Jean",         "genero": "Pop"       }
]);

const necesitoNuevaCancion = [...listaCanciones, {"nombre": "Don't Stop Believin'", "genero": "Rock"}];
console.log(listaCanciones);
console.log(necesitoNuevaCancion);

const tengoNuevaCancion = [ ...necesitoNuevaCancion.slice(0, 3), { ...necesitoNuevaCancion[3], "genero": "Pop" } ];
console.log(tengoNuevaCancion);

const xx = [{...tengoNuevaCancion[1]}/*Here we have an important thing, we can use the spread for an specific item of the array*/,...tengoNuevaCancion]
console.log(xx)


//////////////adding son with concat
const otraNuevaCancion = listaCanciones.concat({ "nombre": "Bohemian Rhapsody", "genero": "Rock" });
console.log(otraNuevaCancion);
const yyy = otraNuevaCancion.concat({"nombre": "Put it on God", "genero": "Christian jamaican"});
console.log(yyy);

//////////////Sort function

const listaCanciones = Object.freeze(["Despacito", "Shape of You", "Uptown Funk", "Billie Jean", "Don't Stop Believin'", "Bohemian Rhapsody"]);
listaCanciones.sort(); // Esto dará un error​
////////to fix it do the following: (This seems like a great idea to organize simple arrays)
const listaCanciones = Object.freeze(["Despacito", "Shape of You", "Uptown Funk", "Billie Jean", "Don't Stop Believin'", "Bohemian Rhapsody"]);
const listaOrdenada = [...listaCanciones].sort();
console.log(listaOrdenada)

/////////////another example using sort to organize by genero, within an object inside of an array
const listaCanciones = [
    { "nombre": "Shape of You",        "genero": "Pop"       },
    { "nombre": "Uptown Funk",         "genero": "Funk"      },
    { "nombre": "Billie Jean",         "genero": "Pop"       }
];


const listaCancionesOrdenada = [...listaCanciones].sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
console.log(listaCancionesOrdenada)
listaCanciones.sort((a,b) => a.genero < b.genero? -1: (a.genero>b.genero? 1: 0) );

console.log(listaCanciones);
///////////Do not use sort with an array of numbers withoubt the fucntion inside. 
///////////////Sort method short
let numbers = [50, 10, 40, 30, 20]; /*Important for using fucntion to use in the future*/
let sorted = numbers.sort((a,b)=> a-b);

//////////////Examples core

const videojuegos = Object.freeze([
    { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
    { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
    { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
    { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
    { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
    { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
    { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
    { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
    { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
    { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
    { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
    { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
    { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
    { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
    { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
    { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
    { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
]);

// Filtrar juegos de aventura o acción-aventura
const juegosAventura = videojuegos.filter(juego => juego.genero === "aventura" || juego.genero === "acción-aventura");

// Obtener los nombres de los juegos
const nombresJuegos = videojuegos.map(juego => juego.nombre);

// console.log(juegosAventura);
// console.log(nombresJuegos);

///////Example 1 with my style
const juegos_con_f = videojuegos.filter(videojuego => videojuego.nombre[0]=="F"? true : false)
console.log(juegos_con_f)
///////Example 1 of the platform
const juegosConF = videojuegos.filter(juego => juego.nombre.startsWith("F"));
console.log(juegosConF);


///////Example 2 with my style
const id_videojuegos = videojuegos.map(videojuego => videojuego.id)
console.log(id_videojuegos);
///////Example 2 of the platform
const idsJuegos = videojuegos.map(juego => juego.id);
console.log(idsJuegos);