function Person() {}

Person.prototype = {
    constructor: Person,
    name: "csw",
    age: 20,
    job: "Software Enginner",
    friends: ['Shelby',"Court"],
    sayName() {
        console.log(this.name);
    }
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push("Van");
person1.name = "www";
console.log(person1.name);
console.log(person2.name);
person1.sayName();
person2.sayName();

console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
console.log("---分割线---")
let test1 = {
    name: 'csw'
};
let test2 = {
    name: 'csw'
}
let test3 = test1;
console.log(test1 == test2)
console.log(test1.name === test2.name);
console.log(test3 === test1);
