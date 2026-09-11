 var number = 0;
var numberElement = document.getElementById('number');
    numberElement.style.color = 'red';

function increment() {
    number++;
    numberElement.innerHTML = number;
    numberElement.style.color = 'blue';
}

function decrement() {
    if (number > 0) {
        number--;
        numberElement.innerHTML = number;
        numberElement.style.color = 'blue';
    }
}