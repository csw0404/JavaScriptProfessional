function Person() {}

Person.prototype.name = "CSWZS";
Person.prototype.age = 20;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

console.log(person1.hasOwnProperty("name"));    //false
console.log("name" in person1);    //true

person1.name = "RJL";
console.log(person1.name);    //来自实例
console.log(person1.hasOwnProperty("name"));    //true
console.log("name" in person1);    //true

console.log(person2.name);    //来自原型
console.log(person2.hasOwnProperty("name"));    //false
console.log("name" in person2);    //true

delete person1.name;
console.log(person1.name);    //来自原型
console.log(person1.hasOwnProperty("name"));    //false
console.log("name" in person1);    //true

function hasPrototypeProperty(object,name) {
    return !object.hasOwnProperty(name) && (name in object);
}

console.log(hasPrototypeProperty(person1,"name"));

person1.name = "ZFL";
console.log(hasPrototypeProperty(person1,"name"));

let keys = Object.keys(Person.prototype);
let keyss = Object.getOwnPropertyNames(Person.prototype);

console.log(keys);    //[ 'name', 'age', 'job', 'sayName' ]
console.log(keyss);    //[ 'constructor', 'name', 'age', 'job', 'sayName' ]

let p1 = new Person();
p1.name = "TQL";
p1.age = 21;
let p1keys = Object.keys(p1);
console.log(p1keys);    //[ 'name', 'age' ]
//ES6
let k1 = Symbol('k1'),
    k2 = Symbol('k2');
let o = {
    [k1]: 'k1',
    [k2]: 'k2'
};
console.log(Object.getOwnPropertySymbols(o));    //[ Symbol(k1), Symbol(k2) ]
console.log(Object.getOwnPropertyNames(o));    //[]
