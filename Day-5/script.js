//Dice Challenge

const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1);
console.log(randomNum2);

const cont1 = document.querySelector('#cont1');
const cont2 =document.querySelector('#cont2');

const img1 = document.querySelector('[alt=one]');
const img2 = document.querySelector('[alt=two]');
const img3 = document.querySelector('[alt=three]');
const img4 = document.querySelector('[alt=four]');
const img5 = document.querySelector('[alt=five]');
const img6 = document.querySelector('[alt=six]');


if(randomNum1 === 1){
   cont1.append(img1);
   window.addEventListener("load", () => {
    img1.style.display = "block";
})}else if(randomNum1 === 2){
   cont1.append(img2);
   window.addEventListener('load', () => {
    img2.style.display = 'block';
   })
}else if(randomNum1 === 3){
  cont1.append(img3);
  window.addEventListener('load', ()=> {
    img3.style.display = 'block';
  })
}else if(randomNum1 === 4){
  cont1.append(img4);
  window.addEventListener('load', ()=> {
    img4.style.display = 'block';
  })
}else if(randomNum1 === 5){
  cont1.append(img5);
  window.addEventListener('load', ()=> {
    img5.style.display = 'block';
  })
}else if(randomNum1 === 6){
  cont1.append(img6);
  window.addEventListener('load', ()=> {
    img6.style.display = 'block';
  })
}


if(randomNum2 === 1){
   cont2.append(img1.cloneNode(true));
   window.addEventListener("load", () => {
    img1.style.display = "block";
})}else if(randomNum2 === 2){
   cont2.append(img2.cloneNode(true));
   window.addEventListener('load', () => {
    img2.style.display = 'block';
   })
}else if(randomNum2 === 3){
  cont2.append(img3.cloneNode(true));
  window.addEventListener('load', ()=> {
    img3.style.display = 'block';
  })
}else if(randomNum2 === 4){
  cont2.append(img4.cloneNode(true));
  window.addEventListener('load', ()=> {
    img4.style.display = 'block';
  })
}else if(randomNum2 === 5){
  cont2.append(img5.cloneNode(true));
  window.addEventListener('load', ()=> {
    img5.style.display = 'block';
  })
}else if(randomNum2 === 6){
  cont2.append(img6.cloneNode(true));
  window.addEventListener('load', ()=> {
    img6.style.display = 'block';
  })
}

const head = document.querySelector('#head');
const p = document.createElement('p');
if(randomNum1 > randomNum2){
  
  p.textContent = 'Player 1 won!';
  head.append(p);
}else if(randomNum1 < randomNum2){
  // const p = document.createElement('p');
  p.textContent = 'Player 2 won!';
  head.append(p);
}else if(randomNum1 === randomNum2) {
  // const p = document.createElement('p');
  p.textContent = 'It Is a Tie!';
  head.append(p);
}

// function player_1 (){
//   const player1 = document.querySelector('#player1');
//   const randomNum1 = Math.floor(Math.random() * 6) + 1;
//   player1.append(randomNum1);
// }

// player_1();
// const imageContainer =document.querySelector('.image-container');
// console.log
// const player1 = document.querySelector('#player1');

// const randomNum1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum1);
// const img1 = document.querySelector('[alt=one]');
// console.log(img1);

// if(randomNum1 === 1){
//    .append(img1);
// }