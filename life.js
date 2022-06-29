const operator = prompt('Enter Operator ( either +, -, *, or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result = 0;
if(isNaN(number1) || isNaN(number2)){
    alert('Wrong input! Refresh the page and provide a number')
}

if(operator == '+'){
    result = number1 + number2;
}
else if(operator == '-'){
    result = number1 - number2;
}
else if(operator == '/'){
    result = number1 / number2;
}
else if(operator == '*'){
    result = number1 * number2;
}
document.write(number1 + operator + number2 +' = ' + result);
