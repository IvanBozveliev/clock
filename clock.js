const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60 ) * 360) + 90;

  if(secondsDegrees == 90){
    secondHand.style.transition = 'none';
  }else{
    secondHand.style.transition = 'all 0.05s';
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  const mins = now.getMinutes();
  const minDegrees = ((mins / 60 ) * 360) + 90;

  if(minDegrees == 90){
     minsHand.style.transition = 'none';
  }else{
    minsHand.style.transition = 'all 0.05s';
  }

  minsHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;

  if(hourHand == 90){
    hourHand.style.transition = 'none';
  }else{
    hourHand.style.transition = 'all 0.05s';
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate,1000)