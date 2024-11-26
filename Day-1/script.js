//--> Variables
//1.Defined value with variable
const myName = 'Mariam';
//2.Asking for a name
let yourName = prompt('What is your name?');
//3.Using concatenation, it combines the existing and received answers and combines them into one sentence.
console.log('My name is ' + myName + ', welcome to my page ' + yourName + '!');

//-- How to change variable values.
//Let's imagine we have two buckets: one filled with water and the other with sand. 
let a = '3';
let b = '8';
//To swap their contents, we need a third, empty bucket to temporarily hold one of the materials. For example:
// 1. We place the sand into the empty bucket.  
let c = a;
// 2. Then, we transfer the water into the now-empty sand bucket. 
a = b;
// 3. Finally, we move the sand from the temporary bucket into the now-empty water bucket.
b = c; 
// As a result, the sand bucket now contains water, and the water bucket now contains sand.
console.log(a,b);

//--> Strings
//-- Strings Concatenation
//1.Defined value with variable
let message = 'Hello';
let name  = 'Mariam';
//2.Combines into one sentence using concatenation
console.log(message + ' there ' + name);

//-- .length property
//1.Defined value with variable
const person = 'Freddie';
//2.Gets the number of letters using the length property
console.log(person.length);

//-- Let’s count the characters and see how many more we can write.
//1.Asked the user to enter letters, specifying a maximum number of letters, which was determined by the slice() method, so that the maximum number was preserved.
let post = prompt('Write what your heart desires!(Only 200 characters)').slice(0,200);
//2.The number of letters entered has been determined.
let charactersCount = post.length;
//3.Shows how many letters have been entered and how many more can be entered.
console.log('You have written ' + charactersCount + ' characters, you have ' + (200 - charactersCount) + ' characters left.');

//Uppercase and LowerCase Methods
//1.Asking for a name
let yourName1 = prompt('What is your name?');
//2.The first letter was converted to uppercase. The slice() method extracted the first letter, which was converted to uppercase by the toUpperCase() method.
let firstLetter = yourName1.slice(0,1).toUpperCase();
//3.Convert the remaining letters to lowercase. Use the slice() method to extract the portion of the word from the first index to the end, regardless of its length, and then convert it to lowercase using the toLowerCase() method.
let restOfTheLetters = yourName1.slice(1,yourName1.length).toLowerCase();
//4.Combines into one word using concatenation
let concatLetters = firstLetter + restOfTheLetters;
//5.Show result.
console.log('Hello, ' + concatLetters);


