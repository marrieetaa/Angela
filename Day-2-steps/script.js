//--> Numbers
//How old would a dog be if it were a human of its age?

//1.Ask the dog's age.
let dogAge = prompt('How old is your dog?');
//2.The formula for calculating a person's age based on a dog's age
let humanAge = (dogAge - 2) * 4 + 21;
//3.Showed the result
console.log('Your dog is ' + humanAge + ' years old in human years');


//--> Function
//-- How many bottles of milk can be purchased with a given amount of money?
//A function has been created that takes the initial amount and the price of each bottle as arguments. In this function, we call two other functions. The first calculates how many bottles this amount will be enough to buy, and the second calculates how much money we will have left after buying.
function getMilk (money,costPerBottle){
  //Backticks help the program understand the meaning without concatenation.
  //Return is for the function to return a value.
 return `With the given amount, you can buy ${calcBottles(money, costPerBottle)} bottles of milk and the change will be ${calcChange(money,costPerBottle)}$.`
}

console.log(getMilk(10, 1.5));

//Calculation of the number of bottles
function calcBottles(startingMoney,costPerBottle){
  //Number of bottles - The initial amount is divided by the cost of each bottle.
  return Math.floor(startingMoney / costPerBottle);
}

function calcChange (staringMoney,costPerBottle){
  //Change - Using the modulo, we find the remainder.
  return staringMoney % costPerBottle
}

//-- How many days, weeks and months we have left if we live until 90 years old.
function lifeInWeeks (age) {
  //The parameter takes as an argument how old we are now and, based on this calculation, how many years we have left.
  let yearsRemaining = 90 - age;
  //Then we multiply the remaining years by the number of days, weeks, and months in a year to find the number of each.
  return `You have ${yearsRemaining * 365} days, ${yearsRemaining * 52} weeks, and ${yearsRemaining * 12} months left.`
}
console.log(lifeInWeeks(27));

//-- BMI calculator
// calculate risk of heart disease
function BMIcalculator (weight,height){
  //The first parameter, which takes the body mass as an argument, must be divided by the second parameter, which is raised to the power of two using the Math.pow() function (it takes two arguments, a base and an exponent).
   return Math.round(weight  / Math.pow(height, 2));
}

console.log(BMIcalculator(65, 1.60));

