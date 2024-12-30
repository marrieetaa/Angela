


// buttons.forEach(button => {
//   button.addEventListener('click',function () {
//  alert('i got click');
// })
// });

const numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++){
  const buttons = document.querySelectorAll('.drum')[i];
   buttons.addEventListener('click', function (){
    const buttonsInnerHTML = this.innerHTML;
     switch(buttonsInnerHTML){
        case 'w':
          let crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
        case 'a':
         let kickBass = new Audio('sounds/kick-bass.mp3');
          kickBass.play();
          break;   
     }
   })
}



// function add (num1,num2){
//   return num1 + num2;
// }
// function sub (num1,num2){
//   return num1 - num2;
// }
// function mult (num1,num2){
//   return num1 * num2;
// }
// function div (num1,num2){
//   return num1 / num2;
// }

// function calculator (num1,num2,operator){
//   return operator(num1,num2);
// }

// console.log(calculator(20,5,add));
// console.log(calculator(20,5,sub));
// console.log(calculator(20,5,mult));
// console.log(calculator(20,5,div));
