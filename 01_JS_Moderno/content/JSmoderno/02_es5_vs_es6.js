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



/////////////////Destructuring
////Without destructuring
const jugador = {
    nombre: "Lionel Messi",
    equipo: "Paris Saint-Germain",
    posicion: "Delantero"
};

console.log(jugador); // Devuelve {nombre: 'Lionel Messi', equipo: 'Paris Saint-Germain', posicion: 'Delantero'}
console.log(jugador.nombre); // Devuelve "Lionel Messi"

////////with destructuring

const jugador = {
    nombre: "Lionel Messi",
    equipo: "Paris Saint-Germain",
    posicion: "Delantero"
};

const {nombre , equipo , posicion} = jugador;
console.log(`Nombre: ${nombre}, Equipo: ${equipo}, Posicion: ${posicion}`)

///////////Without destructuring

// without desestructurar
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
};

console.log(auto.marca); // "Toyota"
console.log(auto.modelo); // "Corolla"
console.log(auto.año); // 2022

///With destructuring
const {marca , modelo , año}  = auto;
console.log(`Marca: ${marca}, Modelo: ${modelo}, Año: ${año}`)


////////////Global Scope

// Variable global para contar las visitas
let visitas = 0;
function mostrarVisitas() {
    console.log(`Número de visitas: ${visitas}`);
}

function nuevaVisita() {
    visitas++;
}

nuevaVisita(); 
mostrarVisitas(); 

////////////Local Scope


function contarVisitas() {
    let visitas = 0; 

    function mostrarVisitas() {
        console.log(`Número de visitas: ${visitas}`);
    }

    function nuevaVisita() {
        visitas++;
    }

    nuevaVisita(); // Se registra una nueva visita
    nuevaVisita(); // Otra visita
    mostrarVisitas(); // Se muestra el número total de visitas
}

// Llamada a la función para contar visitas
contarVisitas();


///////////
// local scope with var
var superheroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash']; 

function imprimirHeroes(heroes) {
    var villanos = ['Joker', 'Thanos', 'Lex Luthor', 'Magneto']; /*Local scope*/
    console.log(villanos);

    function funcionInterna() {
        var ciudades = ['Ciudad Gótica', 'Metrópolis', 'Ciudad Central', 'Ciudad Estrella']; /*Local scope*/
        console.log(ciudades)
    }
    funcionInterna()

}

imprimirHeroes(superheroes);
console.log(superheroes);

// local scope with var

const superheroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash']; 

let imprimirHeroes = heroes => {
    let villanos = ['Joker', 'Thanos', 'Lex Luthor', 'Magneto']; /*Local scope*/
    console.log(villanos);
    let funcionInterna = () => {
        const ciudades = ['Ciudad Gótica', 'Metrópolis', 'Ciudad Central', 'Ciudad Estrella']; /*Local scope*/
        console.log(ciudades)
    }
    funcionInterna()

}

imprimirHeroes(superheroes);
console.log(superheroes);
