const seconds = document.getElementById('seconds');
const fractional = document.getElementById('fractional');

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


let start;
let interval;
let count = 0;
let elapsed;
let stoppedTime = 0;
let isStopped = false;
let hasStarted = false;

function startTimer() {
    if (hasStarted)
        return;
    
    start = Date.now();
    interval = setInterval(elapsedTime, 10)
    
    //console.log(interval);
}

function elapsedTime() {
    hasStarted = true;
    
    if (isStopped){
        isStopped = false;
        stoppedTime = elapsed;

        //console.log('**' + elapsed);
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
    hasStarted = false;
    
    //console.log('stopped: ' + elapsed);
}

function resetTimer() {
    clearInterval(interval);
    interval = null;

    seconds.textContent = '00';
    fractional.textContent = '00';
    stoppedTime = 0;
    elapsed = 0;
}