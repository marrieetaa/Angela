//--> Numbers
//How old would a dog be if it were a human of its age?

//1.Ask the dog's age.
//let dogAge = prompt('How old is your dog?');
//2.The formula for calculating a person's age based on a dog's age
//let humanAge = (dogAge - 2) * 4 + 21;
//3.Showed the result
//console.log('Your dog is ' + humanAge + ' years old in human years');


//--> Function
//-- How many bottles of milk can be purchased with a given amount of money?
function getMilk (money,costOfBottle){
  let numberOfBottles = Math.floor(money / costOfBottle);
  return  `Buy ${numberOfBottles} bottles of milk with the given amount.`;
}

//console.log(getMilk(20,1.5));

