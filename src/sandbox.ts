// let greet = () => {
//     console.log('Hello world');
// };

// greet = 'hello' can't do that

let greet: Function;
// greet = 'hello'

greet = () => {
    console.log('hello world');
}

const add = (a: number, b: number, c: number | string = 10) => {
console.log(a+b)
console.log(c)
}

// c?: means it it an optional argument
// if we won't give a c, c will be equal to undefined
// if we pass the deafult value of c, we don't have to use '?'

add(5,10);
// add(5, '10')
add(5, 10, '20');

const minus = (a: number, b: number) => {
    return a + b
}

let result = minus(10,7)
//so now the type of result is equal to type of minus functuion return type - number - ane we can't override this
//if we don't return anything from function, it will return void 

