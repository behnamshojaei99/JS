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
var bound2 = bind(f, user2);
bound()
bound2()

function bind(func, context) {
    return function () {
        func.call(context)
    }
}