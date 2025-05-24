const display = document.getElementById('display');

function clear() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}

function appendToDisplay(input) {
    display.value += input;
}
