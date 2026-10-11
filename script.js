let counter = document.getElementById('counter');

let count = 0;

function increase(){
    count++;
    counter.innerHTML = count;
}

function decrease(){
    count--;
    counter.innerHTML = count;
}

function reset(){
    count = 0;
    counter.innerHTML = count;
}