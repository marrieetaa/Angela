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
console.log(loveCalc('Santiago','Peralta'));