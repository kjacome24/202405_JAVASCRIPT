const sumarNumeros = (...numeros) => {
    suma = 0;
    numeros.forEach((num)=> suma += num);
    return suma
}

const estudiante = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 25
}


//////////////This module is in charged of exporting functions, objects or just simple elements from this file to be accesible for other.
module.exports = {
    sumarNumeros,
    estudiante
};