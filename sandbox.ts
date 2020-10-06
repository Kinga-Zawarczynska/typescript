let character: string;
let age: number;

// age = 'luigi'
age = 13;
character = 'han solo';
// character = false;

//arrays
let ninjas: string[];
// or we can declare empty array right away, because above there is no array, it will be created in future
let superNinjas: string[] = [];
// ninjas = [10, 23]
ninjas = ['han', 'solo'];

//union types
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(4);
// mixed.push(false);

let uid: string|number;
uid = '123';
uid = 1223;
// uid = false;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjatwo: {
  name: string,
  age: number,
  belt: string
}

ninjatwo = { name: 'mario', age: 20, belt: 'black' } //but we can't leave it empty object

