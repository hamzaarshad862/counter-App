let labelCounter = document.getElementById('labelCounter');

let count = 0;

function increase(){
    count++;
    labelCounter.innerHTML = count;
}

function decrease(){
    count--;
    labelCounter.innerHTML = count;
}

function reset(){
    count = 0;
    labelCounter.innerHTML = count;
}