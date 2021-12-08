function calculate(operator) {
    /* code here */
    // any operator can add to this object
    const obj = {
        '+': (operand1, operand2) => operand1 + operand2,
        '-': (operand1, operand2) => operand1 - operand2,
        '*': (operand1, operand2) => operand1 * operand2,
        '/': (operand1, operand2) => operand1 / operand2,
    }
    return function (operand1) {
        return function (operand2) {
            console.log(obj[operator](operand1, operand2))
        }
    }
}
calculate('+')(1)(2); // 3
calculate('*')(2)(3); // 6

