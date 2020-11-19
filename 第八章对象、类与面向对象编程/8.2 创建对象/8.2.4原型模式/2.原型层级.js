function Person() {
    Person.prototype.name = "CSW";
    Person.prototype.age = 20;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
}

let person1 = new Person();
let person2 = new Person();

//hasOwnProperty()方法用于确认某个属性是在实例还是在原型对象上。继承自Object，属性存在于调用它的对象实例上时返回true
console.log(person1.hasOwnProperty("name"));    //false

person1.name = "RJL";
console.log(person1.name);    //"RJL",来自实例
console.log(person2.name);    //"CSW",来自原型

person1.name = null;
console.log(person1.name);    //null,来自实例
console.log(person1.hasOwnProperty("name"));    //true

delete person1.name;
console.log(person1.name);    //"CSW",来自原型
