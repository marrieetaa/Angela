const buttonColours = ['red','blue','green','yellow'];

const nextSequence = () => Math.floor(Math.random() * 4);
const randomNumber = nextSequence();

const randomChosenColour = buttonColours[randomNumber];
console.log(randomChosenColour);