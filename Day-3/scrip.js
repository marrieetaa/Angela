//--> Functions
//-- Love Clculator
function loveCalc (pers1,pers2){
   let lovScore = Math.round((Math.random() * 100) + 1);
   if(lovScore >= 70){
      return `Your love scroe is ${lovScore}.You love each other like Kanye loves Kanye!`
   }else if(lovScore < 70 && lovScore >= 30){
      return `Your love scroe is ${lovScore}. There’s a spark between you that just needs to be ignited.`
   }else{
      return `You love score is ${lovScore}. You go together like oil and water.`
   }
  
}
//console.log(loveCalc('Santiago','Peralta'));

function leapYear (year){
  if(year % 4 === 0){
     if(year % 100 === 0){
        if(year % 400 === 0){
           return 'Leap year'
        }else {
          return 'Not leap year'
        }
     }else{
      return `Leap year`
     }
  }else{
    return `Not  leap year!`
  }
}
//console.log(leapYear(1989));


//--> Arrays
let guestList = ['Michael','Pam','Jim','Dwight','Angela','Kevin','Oscar','Toby','Kelly','Creed','Stanley','Ryan','David','Mose','Darryl','Phyllis','Meredith'];
function party (guest){
  guest = prompt('What is your name?');
  if(guestList.includes(guest)){
    return 'Welcome!'
  }else{
    return 'Sorry, maybe next time!'
  }
}
//console.log(party());


//FizzBuzz
let output = [];
let number = 1;
function fizzBuzz (){
  if(number % 3 === 0 && number % 5 ===0){
     output.push('FizzBuzz');
  }else if(number % 3 === 0){
     output.push('Fizz');
  }else if(number % 5 === 0){
     output.push('Buzz');
  }else{
    output.push(number);
  }
  number++
  console.log(output);
}

//fizzBuzz();

//--Who's Buying Lunch?
let people = ['Michael','Pam','Jim','Dwight','Angela','Kevin','Oscar','Toby','Kelly','Creed','Stanley','Ryan','David','Mose','Darryl','Phyllis','Meredith'];
function whosPaying (names){
   let randomPersonPosition = Math.floor(Math.random() * names.length) + 1;
   let person = names[randomPersonPosition];;
   return `${person} is going to buy lunch today!`

}

//console.log(whosPaying(people));

