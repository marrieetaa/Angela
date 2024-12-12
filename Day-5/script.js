//Dice Challenge

const cont1 = document.querySelector('#cont1');
const cont2 = document.querySelector('#cont2');

const img1 = document.querySelector('[alt=one]');
const img2 = document.querySelector('[alt=two]');
const img3 = document.querySelector('[alt=three]');
const img4 = document.querySelector('[alt=four]');
const img5 = document.querySelector('[alt=five]');
const img6 = document.querySelector('[alt=six]');

const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6
};

function allAboutPlayers (){
      const imgToShow1 = images[randomNum1];
      const imgToShow2 = images[randomNum2];
      if (imgToShow1) {
        cont1.append(imgToShow1);
      if(imgToShow2){
        cont2.append(imgToShow2.cloneNode(true));
      }  

      window.addEventListener("load", () => {
            imgToShow1.style.display = "block";
        });
    }
}

allAboutPlayers();

function showResult (){
  const head = document.querySelector('#head');
    function addResultText (text){
      const p = document.createElement('p');
      p.textContent = text;
      head.append(p);
  }
  const resultText = randomNum1 > randomNum2 ? 'Player 1 won !' : randomNum1 < randomNum2  ? 'Player 2 won !' : 'It\'s Tie !';
  addResultText(resultText);
}

showResult();


//To be continued