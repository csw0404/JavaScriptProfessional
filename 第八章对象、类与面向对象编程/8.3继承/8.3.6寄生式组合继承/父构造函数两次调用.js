function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blie", "gren"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);     // 第二次调用SuperType()

    this.age = age;
}

SubType.prototype = new SuperType();    // 第一次调用SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

var instance = new SubType("CSW", 20);
instance.sayName();
instance.sayAge();
