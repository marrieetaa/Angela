//--> Variables
const myName = 'Mariam';
let yourName = prompt('What is your name?');
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
