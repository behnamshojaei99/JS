function calculate(operand) {
    /* code here */
    // any operator can add to this object
    const obj = {
        '+': (operand1, operand2) => operand1 + operand2,
        '-': (operand1, operand2) => operand1 - operand2,
        '*': (operand1, operand2) => operand1 * operand2,
        '/': (operand1, operand2) => operand1 / operand2,
    }
    return function (operator1) {
        return function (operator2) {
            console.log(obj[operand](operator1, operator2))
        }
    }
}
calculate('+')(1)(2); // 3
calculate('*')(2)(3); // 6

