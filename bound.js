let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
let user2 = {
    firstName: "saed",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
let f = user.sayHi;
user.sayHi()
f()
//setTimeout(f, 1000);
Function.bind()
var bound = bind(f, user);
bound()

function bind(func, context) {
    const x = this
    return function () {
        func.call(context)
    }
}