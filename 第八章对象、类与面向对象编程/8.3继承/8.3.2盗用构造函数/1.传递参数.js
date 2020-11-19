function SuperType(name) {
    this.name = name
}

function SubType() {
    // 继承SuperType 并传值
    SuperType.call(this, "CSW");

    // 实例属性
    this.age = 20;
}

let instance = new SubType();
console.log(instance.name);
console.log(instance.age);
