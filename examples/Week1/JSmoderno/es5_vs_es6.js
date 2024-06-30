// ES5-----------------------------------------------------------------------
var saludo = "Hola";

function saludar(nombre) {
    console.log(saludo + ", " + nombre + "!");
}
saludar("Pianola");


// ES6-----------------------------------------------------------------------
const saludo = "Hola";

const saludar = (a) => {
    console.log(`${saludo} ${a}`)
}

saludar("Pianola!")




// ES5-----------------------------------------------------------------------

var ironMan = {

    nombre: "Tony",

    apellido: "Stark",

    edad: 50

};


var nombre = ironMan.nombre;

var apellido = ironMan.apellido;

var edad = ironMan.edad;


console.log(nombre, apellido, edad);

// ES6-----------------------------------------------------------------------
const ironMan = {
    nombre : "Tony",
    apellido : "Stark",
    edad: 50
}

const {nombre, apellido, edad} = ironMan;

console.log(nombre, apellido, edad)