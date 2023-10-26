let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.value = input;
}

function clearDisplay() {
    input = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(input);
        display.value = result;
        input = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
