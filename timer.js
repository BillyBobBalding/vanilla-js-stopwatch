const seconds = document.getElementById('seconds');
const fractional = document.getElementById('fractional');

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener('click', formatTimer);
stopButton.addEventListener('click', elapsedTime);

let start;
let count = 0;

function formatTimer() {
    start = Date.now();
    
    setInterval(elapsedTime, 10)
    
    //seconds.textContent = start;
}

function elapsedTime() {
    let elapsed = Date.now() - start;
    fractional.textContent = elapsed;
}
