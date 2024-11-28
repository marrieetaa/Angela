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
// function getMilk (money,costPerBottle){
//   console.log('Buy ' + calcBottles(money, costPerBottle) + ' bottles of milk.')
//  return calcChange(money,costPerBottle);
// }

// console.log(getMilk(10, 1.5));

function getMilk (money,costPerBottle){
 return `With the given amount, you can buy ${calcBottles(money, costPerBottle)} bottles of milk and the change will be ${calcChange(money,costPerBottle)}$.`
}

console.log(getMilk(10, 1.5));

function calcBottles(startingMoney,costPerBottle){
  //Number of bottles
  return Math.floor(startingMoney / costPerBottle);
}
function calcChange (staringMoney,costPerBottle){
  //Change
  return staringMoney % costPerBottle
}

//-- How many days, weeks and months we have left if we live until 90 years old.
function lifeInWeeks (age) {
  let yearsRemaining = 90 - age;
  return `You have ${yearsRemaining * 365} days, ${yearsRemaining * 52} weeks, and ${yearsRemaining * 12} months left.`
}
//console.log(lifeInWeeks(27));

//-- BMI calculator
function BMIcalculator (weight,height){
   return Math.round(weight  / Math.pow(height, 2));
}

console.log(BMIcalculator(65, 1.60));