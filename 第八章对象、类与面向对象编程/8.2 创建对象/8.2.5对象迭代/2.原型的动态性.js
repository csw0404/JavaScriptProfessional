function Person(){}
let friend = new Person();

Person.prototype.sayHi = function() {
    console.log('Hi');
};

friend.sayHi();

Person.prototype = {
    constructor: Person,
    name: "csw",
    sayName() {
        console.log(this.name);
    }
};
friend.sayName();
