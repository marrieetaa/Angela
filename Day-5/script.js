//Dice Challenge
// const player1 = document.querySelector('#player1');


const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

function randomNum1 (){
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const newOption = document.createElement('option');
  newOption.value = randomNum;
  newOption.text = `${randomNum}`;
  player1.appendChild(newOption);
 // player2.appendChild(newOption);
}

// console.log(randomNum())

function randomNumber2


window.addEventListener('load', randomNum1);



// const name = 2+5;
// const news = document.createElement('p');
// news.value = name;
// news.text = `mari ${name}`;
// player2.appendChild(news)

// const newDiv = document.createElement('div');
// newDiv.textContent = 'Hello, I am Mariam';
// newDiv.style.color 
// player2.append(newDiv);

// const para = document.createElement('p');
// para.innerText = 'Heyy heyyy';

// player1.appendChild(para);