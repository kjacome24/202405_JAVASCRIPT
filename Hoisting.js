magic(); // Hoisting that works-----------------------------------------

function magic() {
    foo = 'hello';
    console.log(foo); // hello
    var foo;
}

magic(); // Hoisting that does not work-----------------------------------

function magic() {
    foo = 'hello';
    console.log(foo); // hello
    const foo;
}


magic(); // Hoisting that does not work *(undefined)------------------------------------


function magic() {

    console.log(foo); // undefined
    var foo = 'hello';

}

magic(); // Hoisting that does not work *(undefined)------------------------------------

const magic = () => {
    let foo = 'hello';
    console.log(foo); // hello
}



//-------------------------
let foo = 'hello';
foo = 5;
console.log(foo); // 5

//-------------------------
const foo = 'hello';
foo = 5;
console.log(foo); // Error

//-------------------------Even if const is immutable, it is possible to change the value of an array, unfortunately for primitive types it is not possible to change the value of a const variable.
const foo = [1,2];
foo[1] = 5;
console.log(foo); //    [1,5]