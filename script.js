const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
/**
 * takes current time and calculates location on clock face
 * calculates location on clock face hands should display at based upon calculation included in function
 */
function setDate(){

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60) * 360) + ((seconds/60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
//Updates current time and displays every second
setInterval(setDate, 1000);

setDate();