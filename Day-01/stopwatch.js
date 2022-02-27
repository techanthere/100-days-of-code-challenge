
/*****************
  Part of the Javascript code has been taken 
  from https://codepen.io/cathydutton/pen/xxpOOw. Special thanks to Mikke Goes
  for 22 Javascript Projects on https://mikkegoes.com/javascript-projects-for-beginners 
**************/

window.onload = function () {
  
  let seconds = 00; 
  let tens = 00; 
  let minutes = 00;
  let appendTens = document.getElementById("milliseconds");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes");
  let buttonStart = document.getElementById('start');
  let buttonStop = document.getElementById('stop');
  let buttonReset = document.getElementById('reset');
  let Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "00";
    appendTens.innerText = tens;
  	appendSeconds.innerText = seconds;
    appendMinutes.innerText = minutes;
  }
  
   
  function padZeros(num){
    return num.toString().padStart(2, "0");
  }

  function startTimer () {
    tens++; 

    if(tens <= 9){
      appendTens.innerText = padZeros(tens);
      //"0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerText = tens;
      
    } 
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerText = padZeros(seconds);
      tens = 0;
      appendTens.innerText = padZeros(tens);
    }
    
    if (seconds > 9){
      appendSeconds.innerText = seconds;
    }
    if(seconds > 59){
      minutes++;
      appendMinutes.innerText = padZeros(minutes);
      seconds = 0;
      appendSeconds.innerText = padZeros(seconds);
    }
  }
}