function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Divide by zero";
    }
    return number1 / number2;
}

function getInputs() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return [num1, num2];
}

document.getElementById('add').addEventListener('click', function() {
    const [num1, num2] = getInputs();
    const result = add(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const [num1, num2] = getInputs();
    const result = subtract(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const [num1, num2] = getInputs();
    const result = multiply(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const [num1, num2] = getInputs();
    const result = divide(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});
