function User(firstName, lastName, code, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.code = code;
    this.date = date;
}
function Manager(firstName, lastName, code, date) {
    User.call(this, firstName, lastName, code, date)
}

Manager.prototype = new User;

function Admin(firstName, lastName, code, date) {
    Manager.call(this, firstName, lastName, code, date)
}
Admin.prototype = new Manager;

User.prototype.chom = '1';
Manager.prototype.chom = '3';
var beh = new Admin('behi', 'shoja', 123, 123);
var beh2 = new Manager('behi', 'shoja', 123, 123);
console.log(beh)
console.log(beh2)