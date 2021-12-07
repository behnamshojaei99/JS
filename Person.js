function Person(name) {
    this.name = name
    this.dumbSayHi = () => this.name
    this.sayHi = callOnceAfter(this.dumbSayHi, 200).bind(this)
}

const callOnceAfter = (callback, t) => {
    let id = null;
    return (arg) => {
        clearTimeout(id);
        id = setTimeout(() => callback(arg), t)

    }
}

var john = new Person('John');
console.log(john.name === 'John')
console.log(john.dumbSayHi())
console.log(john.sayHi)
console.log(john.sayHi())
console.log(john.sayHi())
console.log(john.sayHi())
console.log(john.sayHi())