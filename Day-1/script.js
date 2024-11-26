//--> Variables
const myName = 'Mariam';
let yourName = prompt('What is your name?');
console.log('My name is ' + myName + ', welcome to my page ' + yourName + '!');

//-- How to change variable values.
let a = '3';
let b = '8'; 
let c = a;
a = b;
b = c; 
console.log(a,b);

//-- Strings Concatenation
let message = 'Hello';
let name  = 'Mariam';
console.log(message + ' there ' + name);

//-- .length property
const person = 'Freddie';
console.log(person.length);

//-- Let’s count the characters and see how many more we can write.
let post = prompt('Write what your heart desires!(Only 200 characters)').slice(0,200);
let charactersCount = post.length;
console.log('You have written ' + charactersCount + ' characters, you have ' + (200 - charactersCount) + ' characters left.');

//Uppercase and LowerCase Methods
let yourName1 = prompt('What is your name?');
let firstLetter = yourName1.slice(0,1).toUpperCase();
let restOfTheLetters = yourName1.slice(1,yourName1.length).toLowerCase();
let concatLetters = firstLetter + restOfTheLetters;
console.log('Hello, ' + concatLetters);


