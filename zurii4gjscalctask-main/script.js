const firstNumber = Number(prompt('Enter the first number: '));
const operator = prompt('Enter operator you want to use: ');
const secondNumber = Number(prompt('Enter the second number: '));


if (operator == '+') {
    let result = firstNumber + secondNumber;
    alert('Your result is ' + result);
} else if (operator == '-') {
    result = firstNumber - secondNumber;
    alert('Your result is ' + result);
} else if (operator == '*') {
    result = firstNumber * secondNumber;
    alert('Your result is ' + result);
} else if (operator == '/') {
    result = firstNumber / secondNumber;
    alert('Your result is ' + result);
} else {
    alert('You enter a wrong operator!!!');
}