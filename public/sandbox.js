"use strict";
// let greet = () => {
//     console.log('Hello world');
// };
// greet = 'hello' can't do that
var greet;
// greet = 'hello'
greet = function () {
    console.log('hello world');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
// c?: means it it an optional argument
// if we won't give a c, c will be equal to undefined
// if we pass the deafult value of c, we don't have to use '?'
add(5, 10);
// add(5, '10')
add(5, 10, '20');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
//so now the type of result is equal to type of minus functuion return type - number - ane we can't override this
//if we don't return anything from function, it will return void 
