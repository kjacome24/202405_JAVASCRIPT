const sumadosnumeros = (a,b) => a+b;
console.log(sumadosnumeros(2,3))


///////////function that returns an object that did not exist
const information = (name, lastname) => {return {name , lastname}};
console.log(information("kevin","Jacome"));

///////////function that returns an object that did not exist (Simplify)

const information = (name, lastname) => ({name , lastname}) ;
console.log(information("kevin","Jacome"));


////////////arrow function within .map function

const nombres = ["Kevin", "Magnolia", "arturo"];
const nombresupperletters = nombres.map( nombre => nombre.toUpperCase())
console.log(nombresupperletters)


/////Palabra Reservada ‘this’ for classes

class Persona {
    constructor(nombre) {
        this.nombre = nombre ;
        this.decirNombre = () => console.log(this.nombre);
    }
}

const persona = new Persona("Kevin");
persona.decirNombre();


///////////Arrow functions with rest

const sumar = (...numeros)=> {
    total = 0;
    numeros.forEach(numero => total += numero);
    return total
}

console.log(sumar(1,2,3,10))

//////Same example in a different way
const sumar = (...numeros) => (numeros.reduce((total, num)=> total + num, 0));
console.log(sumar(1,2,3,10));

///////////////////////Use of this within arrow functions

const personaje = {
    nombre : "Juan",
    presentarse : function(){
        console.log(this.nombre)
    }
}

personaje.presentarse();

const newPersonaje = {...personaje, nombre : "Jose"};

newPersonaje.presentarse();



