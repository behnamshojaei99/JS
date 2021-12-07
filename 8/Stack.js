function Stack() {
    this.data = [];
    this.top = 0;
}

Stack.prototype.push = function (value) {
    this.data[this.top] = value;
    this.top += 1;
}
Stack.prototype.pop = function () {
    let result = this.data[this.top - 1 ]
    this.top--;
    this.data.length = this.top;
    return result
}

let myStack = new Stack();

myStack.push(2)
console.log(myStack)
myStack.push(3)
console.log(myStack)
console.log(myStack.pop());
console.log(myStack)
console.log(myStack.pop())
console.log(myStack)