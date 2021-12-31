"use strict";
function add_b(n1, n2) {
    return n1 + n2;
}
function printResult_b(num) {
    console.log('Result: ' + num);
    //return; // can thenreturn type :undefined;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult_b(add_b(5, 12));
//let combinedValue: Function;
let combinedValue;
combinedValue = add_b;
//combinedValue = printResult;
//combinedValue=5; // Error not assignable to Function
addAndHandle(10, 20, (n) => console.log(n));
console.log(combinedValue(8, 8));
/// let someValue:undefined;
