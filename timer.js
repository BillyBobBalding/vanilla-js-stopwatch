const seconds = document.getElementById('seconds');
const fractional = document.getElementById('fractional');

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

let start;
let interval;
let count = 0;
let elapsed;
let stoppedTime = 0;
let isStopped = false;

function startTimer() {
    start = Date.now();
    interval = setInterval(elapsedTime, 10)
    
    //console.log(interval);
}

function elapsedTime() {
    if (isStopped){
        
        isStopped = false;
        stoppedTime = elapsed;

        console.log('**' + elapsed);
    }
    else{
        elapsed = Date.now() - start + stoppedTime;

        console.log(elapsed);
    }

    seconds.textContent = Math.floor(elapsed / 1000).toString().padStart(2, '0');
    fractional.textContent = ((elapsed / 1000) % 1).toFixed(2)
    .toString().split('.')[1];
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    isStopped = true;
    console.log('stopped: ' + elapsed);
}