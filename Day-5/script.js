//Dice Challenge

const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1 ,randomNum2)

const cont1 = document.querySelector('#cont1');
const cont2 = document.querySelector('#cont2');

const img1 = document.querySelector('[alt=one]');
const img2 = document.querySelector('[alt=two]');
const img3 = document.querySelector('[alt=three]');
const img4 = document.querySelector('[alt=four]');
const img5 = document.querySelector('[alt=five]');
const img6 = document.querySelector('[alt=six]');

const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6
};
function allAboutPlayerOne (){
const imgToShow = images[randomNum1];
if (imgToShow) {
  cont1.append(imgToShow);
  window.addEventListener("load", () => {
      imgToShow.style.display = "block";
  });
}
}

console.log(allAboutPlayerOne());

function allAboutPlayerTwo (){
  const imageToShow = images[randomNum2];
  if(imageToShow) {
    cont2.append(imageToShow.cloneNode(true));
    window.addEventListener('load' , () => {
      imageToShow.style.display = 'block';
    })
  }
}
console.log(allAboutPlayerTwo());