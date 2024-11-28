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
let count = 1;
function fizzBuzz (){
  while (count <= 100){
    if(count % 3 === 0 && count % 5 ===0){
        output.push('FizzBuzz');
    }else if(count % 3 === 0){
        output.push('Fizz');
    }else if(count % 5 === 0){
        output.push('Buzz');
    }else{
        output.push(count);
      }
      count++
    }
    
    console.log(output);
}

//fizzBuzz();

//--Who's Buying Lunch?
let people = ['Michael','Pam','Jim','Dwight','Angela','Kevin','Oscar','Toby','Kelly','Creed','Stanley','Ryan','David','Mose','Darryl','Phyllis','Meredith'];
function whosPaying (names){
   let randomPersonPosition = Math.floor(Math.random() * names.length);
   let person = names[randomPersonPosition];;
   return `${person} is going to buy lunch today!`

}

//console.log(whosPaying(people));

//-- 99 Bottles
function bottlesOfBeer (){
  let counter = 99;
  while (counter >= 2){
    if(counter <= 2){
      bottle = 'bottle'
    }else if (counter > 1){
      bottle = 'bottles'
    }
     console.log(`${counter} bottles of beer on the wall, ${counter} bottles of beer.take one down and pass it around, ${counter -1} ${bottle} of beer on the wall.`)
    counter--
  }
   return `1 bottle of beer on the wall, 1 bottle of beer. take one down and pass it around , no more bottles of beer on the wall. \nNo more bottles of beer on the wall , no more bottles of beer.Go to the store and buy some more. 99 bottles of the beer on the wall.`
}

console.log(bottlesOfBeer());

