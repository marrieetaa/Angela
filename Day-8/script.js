//just sounds and styles..
$('.btn').on('click', function(){
  $(this).fadeIn(100).fadeOut(100).fadeIn(100).addClass('pressed');
  setTimeout(()=>{
    $(this).removeClass('pressed');
  },100);
  
  let soundFile = $(this).data('sound');
    const sound = new Audio(soundFile);
    sound.play();
})


//
const gamePattern = [];
const userClickedPattern = [];
//Colours of buttons
const buttonColours = ['red','blue','green','yellow'];

let level = 0;
//random number, random color..
function nextSequence () { 
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //increase the level..
  $('h1').text(`level ${level++}`);

};


$('body').on('click',nextSequence);

// let started = false;
// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });


// function checkAnswer(currentLevel){
//   if(userClickedPattern === gamePattern){
//     const p = document.createElement('p');
//     p.textContent = 'Success';
//     $('h1').after(p);
//     $('p').css({
//       'color': 'pink',
//       'fontSize': '4rem',
//       'transition': 'transform 0.5 ease',
//       'transform': 'scaleX(1.8)'
//     })  
//     }else{
//       const p = document.createElement('p');
//       p.textContent = 'Wrong';
//       $('h1').after(p);
//       $('p').css({
//         'color': 'red',
//         'fontSize': '4rem',
//         'transition': 'transform 0.5 ease',
//         'transform': 'scaleX(1.8)'
//     })
// }
// }

//checkAnswer()