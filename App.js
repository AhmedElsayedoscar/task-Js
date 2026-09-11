 let number = 0;
let numberElement = document.getElementById('number');
    numberElement.style.color = 'red';

function increase() {
    number++;
    numberElement.innerHTML = number;
    numberElement.style.color = 'blue';
}

function decrease() {
    if (number > 0) {
        number--;
        numberElement.innerHTML = number;
        numberElement.style.color = 'blue';
    }
}