let id = "100";
{
let id = 200;
id = id + 1;
console.log(id);
}


let x = 3e-3;

console.log(3e-3);


let movie = {
    title: "Life",
    year: 1999
}    

movie.title = "Matrix";

console.log("http://somethingNew.org");

let winter = ["December", "January", "February"];
let index = winter.indexOf("February");
console.log(index)




let daysOfWeek = ["a", "b", "c"];
daysOfWeek.reverse();
console.log(daysOfWeek);


let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);


let x = false || true;
let y = "true" && "false";
let z = false && true;
console.log(`${x} ${y} ${z}`);


let a = 20 + "10";
let b = 20 + +"10";
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xA;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);


let x = [10, 20, 30, 40];
let y = [50, 60];
x.reverse().push(y);
console.log(x)
console.log(x.length);


for(let a=1; a<10; a+=2) {
    console.log(a);
};






let counter = 0;
while (counter++ < 10) console.log(counter++);


let colors = ['red', 'green', 'blue'];
for (let c of colors) console.log(c);

let route = {distance: 131, elevation: 1.4};
for (let k in route) console.log(k);


let a = (n) => {
    return n > 2 ? n * a(n - 1) : 2
}
console.log(a(6));


let x = mult(2)(10);
console.log(x); // -> 20



///////////////////fucntions within others

let mult = function (a) {
    return function (b) {
        return a * b;
    }
}

let x = mult(2)(10);
console.log(x); // -> 20



/////////////////
let cmp = (a, b) => a - b;
x = [40, 10, 30, 20, 50,1];
console.log(x.sort(cmp));

/////
let counter = 2;
let interval = setInterval(() => {
    console.log(counter);
    if (counter-- <= 0) clearInterval(interval);
}, 1000);

