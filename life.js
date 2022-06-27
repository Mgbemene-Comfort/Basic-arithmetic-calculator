const operator = prompt('Enter Operator ( either +, -, *, or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
if (operator == '-') {
    result = number1 - number2;
}
if (operator == '/') {
    result = number1 / number2;
}
else {
    result = number1 * number2;
}

console.log('${number1} ${operator} ${number2} = ${result}');