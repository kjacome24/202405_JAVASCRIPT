/////Manipulación de arreglos y condicionales

var x = 1;
var y = [2, 4, 6, 8, 10];
var z = [3, 6, 9, 12, 15];
if (y[x] + z[2] == 15) {
    console.log('Correcto');
} else {
    console.log('Incorrecto');
}


//////////////Manipulación de arreglos 

var m = [4, 3, 2, 1];
var n = [5, 6, 7, 8];
m[1] = n[m.length - 2] + m[m[0] - 1];
console.log(m);

/////////////////Arreglos Multidimensionales 

var x = [[1, 2], [3, 4, 5, 6], [7, 8]];
console.log(x[0][1] + x[1][2] + x[2][1]);



const calificaciones2 = [8.9, 7.5, 9.0, 10];

const promedio  = ([...calificaciones]) => {
    let total = 0 ;
    calificaciones.forEach(element => {
        total += element
    });
    return total / calificaciones.length
}

console.log(promedio(calificaciones2))



const calificaciones = [8.9, 7.5, 9.0, 10];

const promedio  = ([...calificaciones]) => {
  let total=0;
  calificaciones.forEach(calificacion => total += calificacion)
  return total / calificaciones.length
}

console.log(promedio(calificaciones))

