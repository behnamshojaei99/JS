let user = {
    firstName: "John",
    sayHi(x) {
        console.log(`Hello, ${this.firstName}! ${x}`);
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
var bound = bind(f, user);
var bound2 = bind(f, user2);
bound()
bound2()

function bind(func, context) {
    return function (...args) {
        func.apply(context, args)
    }
}