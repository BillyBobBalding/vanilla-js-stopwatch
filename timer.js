const seconds = document.getElementById('seconds');
const fractional = document.getElementById('fractional');

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

let start;
let interval;
let count = 0;

function startTimer() {
    start = Date.now();
    
    interval = setInterval(elapsedTime, 10)
}

function elapsedTime() {
    let hasStarted = false;

    
    
    let elapsed = Date.now() - start;
    seconds.textContent = Math.floor(elapsed / 1000);
    fractional.textContent = ((elapsed / 1000) % 1).toFixed(2).toString().split('.')[1];
    
    //s2.textContent = elapsed;
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}