function Person() {
}

Person.prototype = {
    // constructor: Person,
    name: "cswzz",
    age: 20,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

// 恢复 constructor 属性
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});

for (let i in Person.prototype) {
    console.log(i);
}

let friend = new Person();

console.log(friend instanceof Object);
console.log(friend instanceof Person);
console.log(friend.constructor == Person);
console.log(friend.constructor == Object);
