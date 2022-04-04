const seconds = document.getElementById('seconds');
const fractional = document.getElementById('fractional');

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener('click', formatTimer);
stopButton.addEventListener('click', stopTimer);

let start;
let interval;
let count = 0;

function formatTimer() {
    start = Date.now();
    
    interval = setInterval(elapsedTime, 10)
    
    //seconds.textContent = start;
}

function elapsedTime() {
    let elapsed = Date.now() - start;
    fractional.textContent = elapsed;
    seconds.textContent = Math.floor(elapsed / 1000);

    //fractional.textContent = Math.round(elapsed / 1000);
    //fractional.textContent = ((elapsed / 1000) % 1).toFixed(2);
    fractional.textContent = ((elapsed / 1000) % 1).toFixed(2).toString().split('.')[1];
    
    
    // let fraction = elapsed;
    // num % 100
    // num / 10
    // num % 10
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

let ans = 1234 / 1000;
// ans = Math.floor(ans / 100);
// console.log(ans);

// ans = 5678;
// ans = Math.floor(ans / 100);
// console.log(ans);

// console.log(ans);
console.log((ans % 1).toFixed(2));
console.log(1234 % 10);
console.log(1234 % 100);
