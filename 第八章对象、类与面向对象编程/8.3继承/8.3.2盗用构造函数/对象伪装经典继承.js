function SuperType() {
    this.colors = ["red", "blue"];
}

function SubType() {
    // 继承SuperType
    SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);

let instance2 = new SubType();
console.log(instance2.colors);
