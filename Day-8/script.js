//const userClickPattern 

const gamePattern = [];

const buttonColours = ['red','blue','green','yellow'];
let level = 0;
function nextSequence () { 
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  level++
};

$('.btn').on('click', function(){
  $(this).fadeIn(100).fadeOut(100).fadeIn(100).addClass('pressed');
  setTimeout(()=>{
    $(this).removeClass('pressed');
  },100);
  
  let soundFile = $(this).data('sound');
    const sound = new Audio(soundFile);
    sound.play();
})

// $('.btn').on('click' , function (){
//     let soundFile = $(this).data('sound');
//     const sound = new Audio(soundFile);
//     sound.play();
// })

$('.btn').on('click',nextSequence);
console.log(nextSequence)

$('.btn').on('click', function(){
    $('h1').text('Level 0');
})