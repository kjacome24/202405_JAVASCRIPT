let counter = 0; 
let maxValue = 10; 
let result = 1; 

debugger; 
for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    result *= maxValue - counter - 1; 
} 

console.log("Final result: ", result);

///////////Show the minnimum
temp = [3,2,9]
let min = temp[0];
temp.forEach(e => min = min > e ? e : min);
console.log(min);
