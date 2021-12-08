function Person(name) {
    this.name = name
    this.dumbSayHi = () => this.name
    this.sayHi = callOnceAfter(this.dumbSayHi, 2000, this)
}


const callOnceAfter = (callback, t) => {
    let id = null;
    return (...arg) => {
        clearTimeout(id);
        id = setTimeout(() => {
            console.log(callback(arg));
        }, t)

    }
}

var john = new Person('John');
console.log(john.name === 'John')
console.log(john.dumbSayHi())
john.sayHi()
john.sayHi()
john.sayHi()