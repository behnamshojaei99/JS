function Queue() {
    this.data = [];
}

Queue.prototype.enqueue = function (value) {
    this.data.push(value)
}
Queue.prototype.dequeue = function () {
    return this.data.shift()
}

const q = new Queue();

for (let i = 0; i < 10; i++) {
    q.enqueue(i);
}

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q)