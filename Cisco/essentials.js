console.log("Hola mundo!")



console.log(Date("24/07/90"))


let height = 180;
let height_cm = height + " cm";
console.log(height_cm)



height2 = 25;
console.log(height2)


"use strict"; ///// THis element is designed to forced the code to work as intended with modern Js. This must be placed at the very beginning of the code.
   
height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);



let steps;
steps = 0;
steps = steps + 10;

console.log(steps)





let greeting = "Hello!";
let counter = 100;
console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1
greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting); // -> Hello!100



////const

const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
greeting  =  "Hello!";


const  greeting  =  "Hello!";
greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.




/////////////////////Scope
//////////Example A
let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

//////////Example B
let  height  =  200;
{
         let  weight  =  100;
         {
                 let  info  =  "tall";
                 console.log(height);  //  ->  200
                 console.log(weight);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height);  //  ->  200
         console.log(weight);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }

////////////////////////////Functions

function testFunction (name_in) {
    const greeting = "Hello";
    let name = name_in
    console.log(greeting + " " + name)
}


testFunction("kevin")



var  globalGreeting  =  "Good  ";
   
function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
testFunction();
   
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined




let  counter  =  100;
console.log(counter);  //  ->  100
{
       counter  =  200;
       console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200

/////////////////////Variable shadowing
let counter1 = 1;
{let counter1 = 10;}



//////////////////////Hoisting

var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70

/////////////////////quiz variables

let RosePrice = 8;
let RoseQuantity = 70;
let RoseValue = RosePrice * RoseQuantity;

let LilyPrice = 10;
let LilyQuantity = 50;
let LilyValue = LilyPrice * LilyQuantity;

let TulipPrice = 2;
let TulipQuantity = 120;
let TulipValue = TulipPrice * TulipQuantity;

console.log(`Rose - unit price: ${RosePrice}, quantity: ${RoseQuantity}, value: ${RoseValue}`)
console.log(`Lily - unit price: ${LilyPrice}, quantity: ${LilyQuantity}, value: ${LilyValue}`)
console.log(`Rose - unit price: ${TulipPrice}, quantity: ${TulipQuantity}, value: ${TulipValue}`)
console.log(RoseValue + LilyValue + TulipValue)



/////////First lab

const RosePrice = 8;
let RoseQuantity = 70;
RoseQuantity = RoseQuantity - 20;
let RoseValue = RosePrice * RoseQuantity;

const LilyPrice = 10;
let LilyQuantity = 50;
LilyQuantity = LilyQuantity - 30;
let LilyValue = LilyPrice * LilyQuantity;

const TulipPrice = 2;
let TulipQuantity = 120;
let TulipValue = TulipPrice * TulipQuantity;

console.log(`Rose - unit price: ${RosePrice}, quantity: ${RoseQuantity}, value: ${RoseValue}`)
console.log(`Lily - unit price: ${LilyPrice}, quantity: ${LilyQuantity}, value: ${LilyValue}`)
console.log(`Rose - unit price: ${TulipPrice}, quantity: ${TulipQuantity}, value: ${TulipValue}`)
console.log(RoseValue + LilyValue + TulipValue)

console.log(typeof(TulipPrice))
console.log(typeof TulipPrice)
console.log(typeof 9)
console.log(typeof "sss")



/////////////////////////////////Boolean

let validation = true;
let validation2 = false;
console.log(typeof validation)
console.log(validation)
validation = false;


///////////////////NUmbers

let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123

let  a  =  1  /  0;
let  b  =  -Infinity;
   
console.log(a);  //  ->  Infinity
console.log(b);  //  ->  -Infinity
console.log(typeof  a);  //  ->  number
console.log(typeof  b);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number


let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n


////////////////String
console.log("Hola " + "Mundo")
console.log("Hola" , "Mundo")


console.log('sss"sss"ssss')

let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows




////////////////////////string interpolation
let  country  =  "Malawi";
let  continent  =  "Africa";
   
let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.



console.time();
// console.log("Test Consola")
console.timeEnd();


////////////////////////////////Selecting a specific letter from a string
let  river  =  "Mekong";
// let  character  =  river.charAt(2);
// console.log(character);  //  ->  k4


// console.log(river.length)



function count_letters (input) {
    const counter = input.length 
    // console.log(counter)
    for (let i = 0 ; i < counter; i++) {
        console.log(input.charAt(i))
    }
}

count_letters(river)



///////////////////slice(beginIndex, [optional] endIndex)

let  river  =  "Mekong";

let river2 = river.slice(1)

console.log(river2)

let river3 = river.slice(1,3)
console.log(river3)


////////////split --------- This function will make a string into an array by looking for an specific character

let river_colombia = "Guatavita Anapoima Tijuana"

let rivers = river_colombia.split(" ")

console.log(rivers)

/////////////Multiple examples of operations with string methods

let  str  =  "java  script  language";
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4

console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'

console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'

console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']


//////////////Nul and indefined examples

let vark;
console.log(vark); ///undefined
console.log(typeof vark) ///undefined

vark = null;
console.log(typeof vark) //object
console.log( vark) // null


/////Type conversions

const str = String(5);
console.log(str)
console.log(typeof str)

const num = Number("7");
console.log(num)
console.log(typeof num);


const num2 = 1;
const num3 = 0;
console.log(Boolean(num2));
console.log(Boolean(num3));

const big1 = BigInt(42);
console.log(big1); // -> 42n

//////////////////////////////////////Conversion to String


let str = "text";
let strStr = String(str);
console.log(`${typeof str} : ${str}`);
console.log(`${typeof strStr} : ${strStr}`);


let b1 = true;
let strB1 = String(b1);
console.log(`${typeof b1} : ${b1}`);
console.log(`${typeof strB1} : ${strB1}`);



let n = null;
let strN = String( n);
console.log(`${typeof n} : ${n}`);
console.log(`${typeof strN} : ${strN}`);

/////////////Conversion to Number


let num = true;
console.log(`${typeof num} : ${num}`);
num = Number(num);
console.log(`${typeof num} : ${num}`);

let num = false;
console.log(`${typeof num} : ${num}`);
num = Number(num);
console.log(`${typeof num} : ${num}`);


///////// Conversion to Boolean

/////////////All of this value will show false as booleans
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false
console.log(Boolean("")); // -> false
console.log(Boolean(undefined)); // -> false
console.log(Boolean(null)); // -> false


////////////Implicit Conversions

////in this example the operation  + make the numeber become a string and concatenatre the two variables. 
const str1 = 42 + "1";
console.log(str1);
console.log(typeof str1)

///////////In this example when using - the string bcomes a number

const str2 = 42 - "1";
console.log(str2); // -> 41
console.log(typeof str2); // -> number



/////////////quiz
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;


console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);



let number = '1234';
console.log(Boolean(BigInt(Number(String(number)))))


let b = true + false;
console.log(typeof b);

let b = true + 1;
console.log(typeof b) //the result is 2

////////////////operation of adding with two +
const str1 = 42 + +"5";
console.log(str1)



//////////////////////////////////Complex data types. Arrays and objects

let user1 = {
    first_name : "Kevin",
    last_name : "Duque",
    email : "kduque@ccc.com",
    age : 34 , 
    alive : true
}

let user2 = {
    first_name : "Matias",
    last_name : "Guti",
    email : "mguti@ccc.com",
    age : 12 , 
    alive : true
}

let users = [user1, user2]
console.log(users[1])

for (let i=0 ; i < users.length;i++) {
    console.log(users[i].first_name)
}


user1.address = "Caminos del viento 2";
console.log(user1)

delete user1.address;///////////////////////////////////////////////Deleliting keys from objects
console.log(user1)



////ow can we add a new element to an existing array, for example, an empty one?

let animals = [];

animals[0] = "dog";
animals[2] = "cat";

console.log(typeof animals[1]); // -> dog



//////////looking for nested values in a list

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia


///////////instance of array

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";
   
console.log(typeof days); // -> object
console.log(typeof day); // -> string
   
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false


/////lenght 
let user1 = {
    first_name : "Kevin",
    last_name : "Duque",
    email : "kduque@ccc.com",
    age : 34 , 
    alive : true
}



console.log(user1.length)


////////////////IndexOf works for arrays and strings but not for objects, if it returns -1 it is because the element was not found

let xxx = [1,2];
let xxy = "kev"
console.log(xxx.length)
console.log(xxy.length)

console.log(xxx.indexOf(1))
console.log(xxy.indexOf("v"))



//////////////////push, pop, shift

let personas = ["Kevin","Arturo","Estiven"]

personas.push("Matias"); ////////////Push is to add elements to the array at the very end
console.log(personas);
personas.unshift("Moises");////////////Unshift does the same but at the beginning
console.log(personas);
personas.pop();/////////////Removes the last element of the array
console.log(personas);
personas.shift();
console.log(personas)
personas.reverse();
console.log(personas)
// let personas2 = personas.slice(0,-2)
let personas2 = personas.slice(0,2)
console.log(personas2)


///////////////////////////Concat
let group1 = [1,3,5,7,9];
let group2 = [2,4,6,8,10];

group1 = group1.concat(group2)
console.log(group1)

group1 = group1.sort()
console.log(group1)



//////////////objects

let ticket = {
    from : "Heroes",
    to : "Plaza bolivar",
    price : 2.5
}

console.log(`Starting station: ${ticket.from}, end station: ${ticket.to}, the price of the ticket: ${ticket.price}`)


let person = {};
person.name = "Kevin";
person.surname = "Duque";
console.log(`${person.name} ${person.surname}`);





let book1 = {
    title : "Speaking JavaScript",
    author : "Axel Rauschmayer",
    pages : 460
};

let book2 = {
    title : "Programming JavaScript Applications",
    author : "Eric Elliott",
    pages : 254
};

let book3 = {
    title : "Understanding ECMAScript 6",
    author : "Nicholas C. Zakas",
    pages : 352
};

let books = [book1, book2, book3];

let book4 = {
    title : "I wanna be a software dev",
    author : "Kevin J",
    pages : 120
};

books.push(book4);

console.log(books);


console.log(books[3].author);

books_shelf = books.slice(-2);

console.log(books_shelf);

books.shift();
console.log(books);


console.log(book1.pages + book2.pages + book3.pages + book4.pages)


//////////////////second lab 


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

let extra_user = {
    name:"Maisie Haley",
    phone:"0913 531 3030",
    email: "risus.Quisque@urna.ca"
}

console.log(contacts.length);
contacts.push(extra_user)/*Multi-line comments ========================================== */;
console.log(contacts.length);

console.log(`name: ${contacts[0].name}, / phone: ${contacts[0].phone} / email: ${contacts[0].email}`)
console.log(`name: ${contacts[3].name}, / phone: ${contacts[3].phone} / email: ${contacts[3].email}`)



"use  strict";  
   
const  prefix  =  "username_";  
   
let  userName  =  "Jack";  
// const  userName  =  "Adam";  
   
let  prefixedUserName;  
// const  prefixedUserName;  
   
userName  =  "John";  
prefixedUserName  =  prefix  +  userName;  
   
console.log(prefixedUserName  /*+  prefixedUserName2*/);  
// console.log(prefixedUserName2);


let x = 100 / 0;
console.log(x)



//////////////////////Assignment operators

let year = 2050;
let newYear = year = 2051;
console.log(newYear, year)


const x = 5;
const y = 2;
console.log(10%40)

console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25



///////////////Unary arithmetic operators
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number


////////////Unary increment and decrement operators

let n1 = 1;
n1++
console.log(n1++)
console.log(n1)
++n1
console.log(n1)
n1--
console.log(n1)
console.log(--n1)


//////////Compound Assignment Operators

let x = 1;
x+=100;
console.log(x);
x -= 4;
console.log(x);
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4


//////////Logical operators

// a conjunction, i.e. logical AND (&& symbol)
// an alternative, i.e. logical OR (symbol ||)
// a negation, i.e. logical NOT (symbol !)
console.log(!true); // -> false
console.log(!false); // -> true

const a = false;
const b = true;
const c = false;
const d = true;
 
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false



////////////ternary operator

console.log(true ? "Alice" : "Bok");
console.log(false ? "Alice" : "Bok");

let x = 4;
let y = 1;


console.log( x % y === 0 ? "X is divisible in Y" : "X is not divisible in Y" ) /////////////////////////divisible example



////////////Dialog box----- This will only works in the browser


/////////alert
alert("Hello, World!")
window.alert("Hello, World! for the second time");
 
alert(4 * 7);
alert(true);
 
alert("text 1", "text 2"); // only "text 1" will be displayed


////////////confirm

let decision = window.confirm("Is it OK?");
console.log(decision);



let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"
 
console.log(message);


let remove = confirm("Do u wanna accept the cookies?");
let message = remove ? alert("U did accept the cookies") : alert("your lost")
 
///prompt

let name = window.prompt("What is your name?", "John Doe"/*Here we add a value for default*/ );
name = name ? name : "anonymous";
 
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");


///////////////This small program will ask u for your name , if u provide it, then will ask u for your age
let name = prompt("What is your name?");
name === null ? alert("Your lost") : alertis(name);

function alertis (name2) {
    let age = prompt("Hello " + name2 + " how old are you?");
    age === null ? alert("U bitch") :  alert(name2 + " is " + age + " years old");
}


alert("Welcome to the volume of a box calculator")
let box_input = {};
box_input.width = prompt("What is the width of the box?");
console.log(box_input)
box_input.hight = prompt("What is the hight of the box?");
console.log(box_input)
box_input.lenght = prompt("What is the lenght of the box?");
console.log(box_input)
box_input.result = box_input.width * box_input.hight * box_input.lenght
console.log(box_input)
box_input.width === null || box_input.hight === null || box_input.lenght === null || box_input.width === 0 || box_input.hight === 0 || box_input.lenght === 0 ? alert("U canceled any of the popups or add 0 to any of the values and the operation has been overed without a reslut") : alert(`The volume of the box is: ${box_input.result}`);


console.log(false || "false")

let nr = "1";
let x = (nr === 1);
let y = (nr == 1);
let z = (nr = 1);
console.log(x, y , z)


console.log("abcd" > "Abcd");


///////////////////Conditional execution


let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}



let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
 
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
 
console.log(shippingCost);





//////////else if 

if (conditions_1) {
    code
  } else if (condition_2) {
    code
  } else if (condition_3) {
    code
  } else {
    code
  }

  


let number = prompt("Enter a number");
if (number< 10 ){
    alert("The number is less than 10")
} else if (number < 30) {
    alert("The number is less than 30")
} else if (number <50) {
    alert("The number is less than 50")
} else {
    alert("The number is greater than 50")
}


///////////Switch

let gate = prompt("Choose gate: a, b, or c")
switch (gate){
    case "a":
    alert("Gate a: Empty");
    break;
    case "b":
    alert("Gate b: Empty");
    break;
    case "c":
    alert("Gate C : Winner")
    break;
    default:
    alert("Not a valid gate")


}



let bingo = prompt("Write a number for the bingo");
/////Using if statement
// if (bingo > 90 && bingo < 110){
//     alert("Bingo!")
// } else {
//     alert("Miss")
// }
////Using ternary operator
bingo > 90 && bingo < 110 ? alert("Bingo!") : alert("Miss");


let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);

///////////////////LAB  Conditional execution

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

alert("Welcome to the contacts database");
let selection = prompt ("Please choose if u wanna show the first contact, the last contact of add a new contact with the following options: first , last and new");
switch(selection) {
    case "first": alert(`name : ${contacts[0].name}, phone: ${contacts[0].phone}, email: ${contacts[0].email}`) ; break;
    case "last": alert(`name : ${contacts[contacts.length-1].name}, phone: ${contacts[contacts.length-1].phone}, email: ${contacts[contacts.length-1].email}`) ; break;
    case "new": 
    let new_user = {}
    new_user.name = prompt("Name of the contact");
    new_user.phone = prompt("phone of the contact");
    new_user.email = prompt("email of the contact");
    console.log(new_user)
    let green_flag_to_add = false;
    new_user.name === null || new_user.name === "" || new_user.phone === null || new_user.email === null || new_user.phone === "" || new_user.email === ""?  alert("One of the values is missing") : green_flag_to_add = true  ;
    green_flag_to_add ? contacts.push(new_user) : console.log("The user was not added");
    green_flag_to_add ? alert("contact succesfully added") : console.log("The user was not added");
    console.log(contacts)
    break;
    default:
    alert("Not a valid option")
}
console.log(contacts)





///////loops

//////////////while
let n = 0;
while (n < 91) {
    console.log(n)
    n+=10;
}
////////////////////////////////////////kevin while loop with switch
let validator = true;
let counter = 0; 
while (validator){

    let x = confirm("do u wanna continue?");
    switch(x) {
        case true : counter += 1; break;
        default: validator= false;
    }
    console.log(counter)
}
console.log(counter)


let isOver = false;
let counter = 1; 
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}

/////////////example of simple while loop
let isOver = false;
let counter = 1;
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}


/////////////////////////The do … while loop

let isOver;
let counter = 0;

do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);



let validator;
let counter = 0;
do {
    validator = confirm("Do u wanna continue?")
    validator ? counter +=10 : counter = counter;
    console.log(counter)
}
while (validator);

///////////////////////////////A while is not making itenerations right away but the do while yes. 
let condition = false;
 
while (condition) {
    console.log("A while loop iteration."); // never executed
}
 
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);





///////////////////////for
for (let i = 0 ; i<=90; i +=10) {
    console.log(i)
}



for (let x = 0; x<=100 ; x += 5){
    console.log(x)

}




//////////////////3 different loops

////////////loop with for
for (let x = 0; x<10; x++){
    console.log(x)
}

////////////loop with while
let x = 0;
while (x<10) {
    console.log(x)
    x++;
}

////////////loop with do while
let x = 0;
do {
    console.log(x);
    x++;
} while (x<10)
//example 2 do while
    console.log('Hello!');
    let x = true;
    let counter = 0;
    do {x = confirm("do u wanna continúe? " );
       x? counter++ : counter=counter;
      
       } while(x)
    
    console.log(counter)

//////////////////Loops with arrays
let values = [10, 30, 50, 100];
let sum = 0;

for (let i = 0; i<values.length ;i++){
    sum += values[i];
}

console.log(sum)


//////////Example 
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

////////Example 2

let values = [10, 30, 50, 100];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}

for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}

for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}



////////////for of

////Examples with arrays
let values = [10, 30, 50, 100];
let sum = 0;

for (let value of values){
    console.log(value)
    sum += value;

}
console.log(sum)


////Examples with string
let names = "hello";
for (let letters of names){
    console.log(letters)
}

//////////Example with arrays with object within
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities){
    console.log(`${city.name} : ${city.population}`)
}





////Extra example for each with arrays that have objects
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
 
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}


/////////////exapmple with objects where we change of for in.

let dics = {
    name : "kevin",
    keys : 123,
    dates : "12/07/20"
}

for (let dic in dics){
    console.log(`${dic} : ${dics[dic]}`)

}

//////////////////////////////////
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
// for (let key in user) {
//     console.log(key); // -> name, surname, age, email
// };
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};


///////////////The break and continue statements

let i = 0;
// An infinite loop
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}
 
alert(`Exited the loop with a break (${i}).`);


///
for (let i = 0; i < 10; i++) {
    if (i == 3) {
     continue;
    }
    console.log(i);
}


/////////switch example with with more tha  one case

let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}


////different syntaxis for more readable undersatinding with swtch adding brackets for each case

let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}


min = prompt("Min number")
max = prompt("Max number")

for (let i = max; i >= min ; i -= 10) {
    console.log(i)
};


/////example for of loop quiz
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// Example 1:
for (let number of numbers) {
    console.log(number)
}

// Example 2:
for (let number of numbers)
{
    number % 2 == 0 ? console.log(number) :  number = number; /*The conclusion here is that when there is just one condition if is more convinient */
}

// Example 3:
for (let number of numbers) {
    if (number < 60 && number > 10){
        console.log(number)
    }
}

for (number of numbers) {
    if (number % 2 === 0) { /*Example for divisible numbers in two*/
        console.log(number);
    }
}

for (number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}





////////////////////quiz example mine
let movies = []
let new_movie = {
}
let go_on = true;
while (go_on){
    let title = prompt("Name of the movie?");
    let imdb = Number(prompt("rating from www.imdb.com"));
    console.log(new_movie)
    title === null || title === "" ||  imdb === null || imdb === "" ? go_on = false : movies.push({title :  title, imdb : imdb }) ;
}

console.log("Bad movies")
for (let movie of movies){
    if (movie.imdb <= 7) {
        console.log(`${movie.title} : ${movie.imdb}`)
    }   
}

console.log("Good movies")
for (let movie of movies){
    if (movie.imdb > 7) {
        console.log(`${movie.title} : ${movie.imdb}`)
    }   
}

///////////////Quiz example cisco

let movies = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}

///////////////////


let vessel = {
    LATITUDE : 40.07288,
    LONGITUDE : 154.48535 ,
    COURSE : 285.6 ,
    SPEED : 14.0 ,
    IMO : 9175717 ,
    NAME : "MARENO"
}

for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}



///////////////CALCULATOR WITH WHILE
while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}





///////////////////LOOPS LAB

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

alert("Welcome to the contacts database");
let validator = true;
while (validator){
    let selection = prompt ("Please choose what u wanna do: \n display the first contact (first) \n display the last contact (last) display all contacts (all) \n add a new contact (new) \n exit the program (quit)");
    switch(selection) {
        case "first": alert(`name : ${contacts[0].name}, phone: ${contacts[0].phone}, email: ${contacts[0].email}`) ; break;
        case "last": alert(`name : ${contacts[contacts.length-1].name}, phone: ${contacts[contacts.length-1].phone}, email: ${contacts[contacts.length-1].email}`) ; break;
        case "new": 
        let new_user = {}
        new_user.name = prompt("Name of the contact");
        new_user.phone = prompt("phone of the contact");
        new_user.email = prompt("email of the contact");
        console.log(new_user)
        let green_flag_to_add = false;
        new_user.name === null || new_user.name === "" || new_user.phone === null || new_user.email === null || new_user.phone === "" || new_user.email === ""?  alert("One of the values is missing") : green_flag_to_add = true  ;
        green_flag_to_add ? contacts.push(new_user) : console.log("The user was not added");
        green_flag_to_add ? alert("contact succesfully added") : console.log("The user was not added");
        break;
        case "quit": validator=false ; break; 
        case "all": 
            for (let contact of contacts){
                console.log(`Name: ${contact.name} / Phone:  ${contact.phone} / email: ${contact.email}`)
            }; break;
        default:
        alert("Not a valid option")
    }
    console.log(contacts)
}


let car = {make: "Citroen", model: "DS"};
for (let f in car)
console.log(f);


/////////////////////////////FUnctions



function test (){
    // console.log("1");
    let x = 1;
    return x;
}

let x = test ();
console.log(x)



function fun_inputs (first,second) {
    console.log(`Hola ${first} ${second}`)
}

fun_inputs("Kevin", "Jacome");


///////////////adding function example
let result = function add(first,second){
    return first + second
}
console.log(result(2,3))

////////////Example 2

function add(first, second) {
    return first + second;
    }
    

let result = add(5,7);
console.log(result)

////////////Example 3
function getElementId(elements, index){
    return elements[index]
}

let array_test = [1,5,6,7]

let result = getElementId(array_test,1)
console.log(result)


///////////Example 4

function getMeanTemp(temperatures) {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}
let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean:
16.666666666666668
let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean:
18.083333333333332



/////////////Functions with shadowing

function add (first,second) {
    return first + second;
}

let first = 10, second = 20 ; third = 40; fourth = 80;
console.log(add(first,second))
console.log(add(second,third))
console.log(add(third,fourth))


/////////////Example 2

let a=100, b=200, c=300;

function test(a){
    let b = 10;
    console.log(a);//1
    console.log(b);//10
    console.log(c);//300
}

test(1);


/////////////////////////Parameters Validation

/////////Using return within a if validation

function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)/*This is validating if temperatures is an array and if not will do a Return NaN*/) {
        return NaN;/////////////this will end the function before moving forward
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}
console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20


////////////Recursion: Is the operation of using a function within the same function


///////////factorial
function factorial (n){
    let result = 1;
    do {
        result *= n; 
        console.log(result)
        n--;
    } while (n>1)
    return result 
}

let result = factorial(6);


//////////////////Factorial with recursion

function factorial2 (n){
    return n > 1 ? n * factorial2(n -1) : 1;
}

console.log(factorial2(6));

////////////////////Functions as first-class members it means assing a function to a variable or using functions as data. 
function showMessage(message) {
    console.log(`Message: ${message}`);
}
let sm = showMessage;
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function


/////////Example 2

let x = function a (){return "Hello world"}

console.log(x())
console.log(typeof x)

/////////Example 3 using functions as data. 

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function operation(func, first, second) {
    return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200


/////////example 4
let myAdd = function add(a, b) {
    return a + b;
}
console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30


//////////////Without using a name for the function inside
let myAdd = function(a, b) {
    return a + b;
}
console.log(myAdd(10, 20)); // -> 30


//////////////example with anonymus functions

function operation(func, first, second) {
    return func(first, second);
}
let myAdd = function(a, b) {
    return a + b;
}
console.log(operation(myAdd, 10, 20)); // -> 30
console.log(operation(function(a, b) { /* It might look useless but in real like is used really often*/
    return a * b;
}, 10, 20)); // -> 200



////////////////////Callbacks (Is the art of using function as input parameter in other functions)

///////Synchronous callbacks
let inner = function() {
    console.log('inner 1');
}
let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');
//////////oputput
// test 1
// outer 1
// inner 1
// outer 2
// test 2


////////////Asynchronous callbacks

/////////SetTimeout
let inner = function() {
    console.log('inner 1');
}
let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback,1000);/*So Basically here what we are doing is triggering the settimeout with whatever is inside but we are not waiting for the function to finish to keep going wiht the rest of the code*/
    console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');


//////////////setTimeout and setInterval functions
let inner = function() {
    console.log('inner 1');
    }

let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function(){
        clearInterval(timerId);
    }, 5500);
}

console.log('test 1');
outer(inner);
console.log('test 2');
    
////////////AddEventListener
////////The foollowing example will just work on the browser. 
window.addEventListener("click", function() {
    console.log("clicked!");
});

//////////////////Arrow functions
///Example 1
let x = () => console.log("Hello world");
x()
///Example 2

let add = (a,b) => a + b ; /*Remember when the expresion is short there is no need for curly brackets, same goes for the return if we expect this value to be the operation */
console.log(add(2,3));

//////Exampme 3

let factorial = n => {n>1 ? n*factorial(n-1):1};
factorial(5); 



///////Foreach Example 4r

let names = ["Alicia","Kevin","Maria"];

let showname = name => console.log(name);
names.forEach(showname)

///////////Sort method

let numbers = [50,10,40,30,20,1,100];
let retVal = 0;
let sorted = numbers.sort((a,b) => { 
    a<b ? retVal = -1 : retVal=1;
    return retVal
})
console.log(sorted)


///////////////Sort method short
let numbers = [50, 10, 40, 30, 20]; /*Important for using fucntion to use in the future*/
let sorted = numbers.sort((a,b)=> a-b)
console.log(sorted)

//////INverted sort method

let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a,b)=> b-a)
console.log(sorted)

/////////////////////FUnctiont with arrow and ternary operator to add numbers
let add = (a,b) => {
    let total = Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
    return total
};

console.log(add(2,3))

/////////////////////FUnctiont with arrow and ternary operator to substract numbers

let subs = (a,b) => {
    let total = Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
    return total
};

console.log(add(2,3))

/////////////////////FUnctiont with arrow and ternary operator to multiplicate numbers

let mul = (a,b) => {
    let total = Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;
    return total
};

console.log(add(2.5,3))

///////////////////////Really important note, when adding curly brackets we will not be able to automatically have a return and we have to add it
let mul = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

console.log(add(2,3))


///////////Using Callback
let add = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
let subs = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
let mult = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;
let action = (callback,a,b) => callback(a,b);
console.log(action(subs,2,3))



////////////////// My example of setInterval
let counter = 0;
let counting = ()=> {console.log(++counter)};

let counterx = (callback) => {
    let intervalId  = setInterval(callback, 2000);
    setTimeout( () => {clearInterval(intervalId)}
        ,20000);
};

counterx(counting)


///////////The platform example
let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);


//////////Fibonacci made with recursion


let fibonacci = n => {
    switch(n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(n -1) + fibonacci(n -2) 

    }
}

console.log(fibonacci(4))
console.log(fibonacci(7))

/////Fibonaccci with ternary operator and arrow function

let fibonacci = n => n == 0 ? 0 : (n == 1? 1 : fibonacci(n -1) + fibonacci(n -2));
console.log(fibonacci(4))
console.log(fibonacci(7))




////////////////Lab Functions 1 

let contacts = [{
    name: "Maxwell Wright",
    phone: "0191 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}

];

let addNewContact = (array,name,phone,email) => 
    {
        array instanceof Array && name != undefined && phone != undefined && email != undefined ? array.push({name : name , phone : phone, email : email}) : console.log("The user was not added");
    };

let showAllContacts = (array) => array instanceof Array ? array.forEach( (contact, index) => console.log(`${index} Name: ${contact.name}`)): "Is not an array";


let showContact = (array, index) => array instanceof Array && (array.length -1) >= index ? console.log(`Name: ${array[index].name} / Phone: ${array[index].phone} / email: ${array[index].email}`) : console.log("The contact is not valid") ;


addNewContact(contacts,"Kevin","31245500 (0)", "kev@mm.com");
showAllContacts(contacts)
showContact(contacts,3);

test = ["Kevin" , "Artruo", "Carlos"]; 
console.log(test.sort())


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
} , {
    name: "Alberto Richards",
    phone: "2800 1111",
    email: "aibero@convallis.edu"
}
];


let showAllContacts = (array,sortby) =>
    {
        array = array.sort((a,b) => {
            let retVal = 0;
            a[sortby] < b[sortby] ? retVal = -1 : retVal=1;
            return retVal
    }
    )
    array instanceof Array ? array.forEach( (contact, index) => console.log(`Name: ${contact.name}`)): "Is not an array";
    }

showAllContacts(contacts,"name")



//////6.0.3 Errors and exceptions in JavaScript////////////////////////////

let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier, because we are missing a comma (a b)
let result = multiply(10, 20);
console.log(result);


let multipl = (a, b) => a + b;
let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined. Here we basically did not type the right name of the variable and the system is unable to find the variable. 
console.log(result);

const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.


///exception handling (or more generally, error handling)

try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {  
    console.log(error.message); // -> conole is not defined 
}

////nested try

try {
    console.log('abc');
    conole.log('abc');

} catch (error){
    console.log(error.message)
    try {conole.log("a")} catch (error){console.log(error.message)}
}


///Errors without exceptions?

console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN


/////USe of Is finite to make sure we get a number in the input a

let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}


"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}



////////////////////////Creation of an array with empty spaces with array(#ofelements)
let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length, here -1 is not jus possible for the number of elmentes. 
console.log(testArray2.length);

////////The try...catch statement

try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}



////////////////New example with try to explain that try will not work with syntaxis errors

try{
    let a = b;
} catch(error){
    console.log("Caught " + error);
}

console.log("We handled the exception")



//////////////Conditional exception handling
//////////Instanceof
//variable instanceof type

try{
    let a = b;
} catch(error){
    console.log(error instanceof ReferenceError); ///truee
}


try{
    const someConstValue = 5;
    someConstValue = 7;
} catch(error){
    console.log(error instanceof ReferenceError); ////Falseee
}


////Handleling exceptions/erros with instanceof and if stataments

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2



//////The finally statement

try {
    // code to try
} finally {
    // this will be always executed
}


let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5


///////////Example 
let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {}


finally {
    console.log(a); // -> 10
}
console.log(a);
///////////////Example
let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
 
} finally {
    console.log("Finally!");
}






////////////////////Example with try, catch and finally
let x = 10;
try {
    x = 20;
    console.log("Inside the try");
    const xx = 0;
    xx =2;
} catch(error){
    console.log("Inside the catch");
} finally{
    console.log("Inside the finally")
    console.log(x)
} 
console.log("We are outside of the try");



/////////Nested try

let a = 10;
try {
    a = c; // First ReferenceError
} catch (error) {
    try {
        console.log(error.message)
        console.log(b); // Second ReferenceError
    } catch (error) {
        console.log(error.message)
        console.log("Second catch!"); // -> Second catch!
    }
} finally {
    console.log("Finally!"); // -> Finally!
}


/////////The throw statement and custom errors

console.log("start"); // -> start
throw 100; // -> Uncaught 100
console.log("end");

//////Throw inside a block

console.log("start"); // -> start
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end

let factorial = n => n>1 ? n*factorial(n-1):1;
console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(8)); // -> 40320
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Infinity


//////////////Adding throw to a function to avoid values that we don want

let factorial = n => {
    if (n>20) {
        throw new RangeError ("Max value 20")
    }
    return n>1 ? n*factorial(n-1):1;
}
console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(8)); // -> 40320
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Infinity



/////adding inside try catch
let factorial = n => {
    try {    if (n>20) {
        throw new RangeError ("Max value 20")
    }
    return n>1 ? n*factorial(n-1):1;} catch (error) {
        return error.message
    }
}
console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(8)); // -> 40320
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Infinity


///////////////////
let div = (a, b) => {
    if (b == 0) {
        throw new RangeError("Can't divide by 0");
    }
    return a / b;
}
// console.log(div(4, 2)); 
// console.log(div(4, 0)); 


let numbers = [10, 40, 0, 20, 50];
for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}

/////Testing and debugging your code

function average(a, b) {
    return a + b / 2;
}

console.log(average(2, 10));   // -> 7 expected: 6
console.log(average(5, 5));    // -> 7.5 expected: 5


function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(largest(2,6,4))


/////Debugging
console.log("Before debugger");
debugger;
console.log("After debugger");

let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915
////////////Doubling the speed

let part = 0;
console.time('Leibniz');
for(let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
let pi = part * 4;
console.log(pi);




const maxPokemonId = 20;
const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
console.log(randomId)

