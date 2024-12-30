


// buttons.forEach(button => {
//   button.addEventListener('click',function () {
//  alert('i got click');
// })
// });

const numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++){
  const buttons = document.querySelectorAll('.drum')[i];
   buttons.addEventListener('click', function (){
    this.style.color = 'green';
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
