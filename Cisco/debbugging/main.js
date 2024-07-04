function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    console.log(name); // -> inner
    return "Hello !";
}
console.time();
console.log("before outer() call");
// debugger;
console.log(outer());
console.log("after outer() call");
console.timeEnd();

///////console.time and console.timeEnd



