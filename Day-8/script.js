const gamePattern = [];

const buttonColours = ['red','blue','green','yellow'];

const nextSequence = () => Math.floor(Math.random() * 4);
const randomNumber = nextSequence();

const randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$('.btn').on('click', function(){
  $(this).fadeOut().fadeIn();
})

$('.btn').on('click' , function (){
    let soundFile = $(this).data('sound');
    const sound = new Audio(soundFile);
    sound.play();
})