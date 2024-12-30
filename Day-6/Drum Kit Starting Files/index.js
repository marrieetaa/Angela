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
     makesSound(buttonsInnerHTML);
   })
}


document.addEventListener('keydown',function(event){
   makesSound(event.key);
});

function makesSound (key){

     switch(key){
        case 'w':
          const crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
        case 'a':
         const kickBass = new Audio('sounds/kick-bass.mp3');
          kickBass.play();
          break;  
        case 's':
         const snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
        case 'd':
          const tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
        case 'j':
          const tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();    
          break;
        case 'k':
          const tom3 = new Audio ('sounds/tom-3.mp3');   
          tom3.play();   
          break;
        case 'l':
          const tom4 = new Audio ('sounds/tom-4.mp3');
          tom4.play();
          break;
          default: console.log(buttonsInnerHTML);
     }
}





























