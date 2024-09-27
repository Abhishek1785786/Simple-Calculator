// script.js
let display = document.getElementById('display');

function appendDigit(digit) {
    display.innerText += digit;
}

function appendOperator(operator ) {
    display.innerText += operator;
}

function clearDisplay() {
    display.innerText = '';
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'AC') {
       Clear();
    }
 });