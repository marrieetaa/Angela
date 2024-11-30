//Dice Challenge

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

function randomNum1 (){
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const newOption = document.createElement('option');
  newOption.value = randomNum;
  newOption.text = `${randomNum}`;
   return player1.appendChild(newOption);
}

function randomNum2(){
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const newOption = document.createElement('option');
  newOption.value = randomNum;
  newOption.text = `${randomNum}`;
  return player2.appendChild(newOption);
}

console.log(randomNum1());
console.log(randomNum2());

// window.addEventListener('load', randomNum1);
// window.addEventListener('load', randomNum2);

const dice1 = document.querySelector('[alt=one]');
const dice2 = document.querySelector('[alt=two]');
//console.log(dice2)

function result (){
  if(randomNum1 > randomNum2){
    return 'yesss';
  }else if(randomNum1 < randomNum2){
    return 'whyyyyyyy'
  }else{
    return 'wooow'
  }
}
console.log(result())