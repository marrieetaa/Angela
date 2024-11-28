//--> Functions
//-- Love Clculator
function loveCalc (pers1,pers2){
  //
  //Using math.random(), generate a number from 1 to 100.
  let lovScore = Math.round((Math.random() * 100) + 1);
  //High Love Score (70 or above)
  if(lovScore >= 70){
     return `Your love scroe is ${lovScore}.You love each other like Kanye loves Kanye!`
  //Moderate Love Score (between 30 and 69)
  }else if(lovScore < 70 && lovScore >= 30){
     return `Your love scroe is ${lovScore}. There’s a spark between you that just needs to be ignited.`
  //Low Love Score (below 30)
  }else{
     return `You love score is ${lovScore}. You go together like oil and water.`
  }
}
//Show result
console.log(loveCalc('Santiago','Peralta'));

//Checks which year was a leap year
//
function leapYear (year){
 //If divisible by 4, move to the next step.  
 if(year % 4 === 0){
  //If divisible by 100, move to the next step. 
    if(year % 100 === 0){
      //If divisible by 400, it is a leap year.
       if(year % 400 === 0){
          return 'Leap year'
      //If not divisible by 400, it is not a leap year.   
       }else {
         return 'Not leap year'
       }
   //If not divisible by 100, it is a leap year.    
    }else{
     return `Leap year`
    }
//If not divisible by 4, it is not a leap year.
 }else{
   return `Not  leap year!`
 }
}
//console.log(leapYear(1989));


//--> Arrays
let guestList = ['Michael','Pam','Jim','Dwight','Angela','Kevin','Oscar','Toby','Kelly','Creed','Stanley','Ryan','David','Mose','Darryl','Phyllis','Meredith'];
//The includes() method in JavaScript is used to check if a certain element exists within an array or string.
//~~Returns true if the element is found in the array or string.
//~~Returns false if the element is not found.
function party (guest){
 //The party function prompts the user for their name. 
 guest = prompt('What is your name?');
 //If the name is in the guestList, the function returns a welcoming message ("Welcome!").
 if(guestList.includes(guest)){
   return 'Welcome!';
 //If the name is not in the guestList, the function returns a polite rejection message ("Sorry, maybe next time!").  
 }else{
   return 'Sorry, maybe next time!';
 }
}
//console.log(party());


//FizzBuzz
//1.output is an empty array that will be used to store the results of the FizzBuzz logic (either the numbers or the strings 'Fizz', 'Buzz', or 'FizzBuzz').
let output = [];
//2.count is initialized to 1, which will be the starting point of our loop. It will count up to 100.
let count = 1;
//3.This is the declaration of the fizzBuzz function. When this function is called, it will execute the logic inside the function body.
function fizzBuzz (){
//4.The while loop begins, and it will continue running as long as count is less than or equal to 100. Once count exceeds 100, the loop will stop.
//4.1 Inside this loop, the logic for FizzBuzz will be applied to each value of count.
 while (count <= 100){
//5.This if statement checks if the current value of count is divisible by both 3 and 5 . The % operator returns the remainder of division, so if the remainder is 0, it means the number is divisible by that number.
//5.1 If the condition is true, it adds 'FizzBuzz' to the output array using output.push('FizzBuzz').
   if(count % 3 === 0 && count % 5 ===0){
       output.push('FizzBuzz');
//6.If the previous if condition wasn't true (i.e., the number is not divisible by both 3 and 5), this else if checks if count is divisible by 3 (count % 3 === 0).
//If true, it adds 'Fizz' to the output array.       
   }else if(count % 3 === 0){
       output.push('Fizz');
//7.If neither of the previous conditions was true, this else if checks if count is divisible by 5 (count % 5 === 0).
//If true, it adds 'Buzz' to the output array.       
   }else if(count % 5 === 0){
       output.push('Buzz');
//8.If none of the above conditions are true (i.e., the number is not divisible by 3 or 5), the number itself is added to the output array (output.push(count)).       
   }else{
       output.push(count);
     }
  //After each iteration of the loop, count is incremented by 1. This ensures that the loop moves on to the next number (from 1 to 100).   
     count++
   }
 //9.Print the Final output Array  
   console.log(output);
}

//fizzBuzz();

//--Who's Buying Lunch?
//Initialization of the people Array
//Each name in the array represents a person who could be selected to buy lunch.
let people = ['Michael','Pam','Jim','Dwight','Angela','Kevin','Oscar','Toby','Kelly','Creed','Stanley','Ryan','David','Mose','Darryl','Phyllis','Meredith'];
//The function whosPaying is defined. It accepts one parameter: names, which is expected to be an array of people (like the people array).
function whosPaying (names){
 // Random Position Calculation 
  let randomPersonPosition = Math.floor(Math.random() * names.length);
 //The value at the randomly chosen position in the "randomPersonPosition" is picked from the "names" array and saved into the "person" variable. This "person" is the one who will buy lunch. 
  let person = names[randomPersonPosition];
//The function gives back a message that says the name of the randomly chosen person will buy lunch. It uses a template literal to include the person's name inside the message.  
  return `${person} is going to buy lunch today!`

}

//console.log(whosPaying(people));



// >>>>> I have something to correct here, something to refine. 

//-- 99 Bottles
function bottlesOfBeer (){
//The variable counter is initialized to 99. This variable will keep track of the number of bottles remaining, starting at 99 and decreasing with each iteration of the loop.  
 let counter = 99;
//The while loop begins. It will run as long as counter is greater than or equal to 2. The loop will stop once counter is less than 2. 
 while (counter >= 2){

   if(counter <= 2){
     bottle = 'bottle'
   }else if (counter > 1){
     bottle = 'bottles'
   }
    console.log(`${counter} bottles of beer on the wall, ${counter} bottles of beer.take one down and pass it around, ${counter -1} ${bottle} of beer on the wall.`)
  //After printing the lyrics for the current number of bottles, the counter is decremented by 1 to move to the next number  
   counter--
 }
  return `1 bottle of beer on the wall, 1 bottle of beer. take one down and pass it around , no more bottles of beer on the wall. \nNo more bottles of beer on the wall , no more bottles of beer.Go to the store and buy some more. 99 bottles of the beer on the wall.`
}

//console.log(bottlesOfBeer());
