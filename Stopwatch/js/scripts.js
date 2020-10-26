var h1 = document.getElementsByTagName('h1')[0];
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var clearButton = document.getElementById('clear');

var seconds=0;
var minutes = 0;
var hours = 0;
var t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" 
    + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" 
    + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add,1000);
}
timer();

startButton.onclick = timer;

stopButton.onclick = function() {
    clearTimeout(t);
}

clearButton.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}


