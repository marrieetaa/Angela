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
console.log(leapYear(1989));