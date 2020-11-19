function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {}

// 继承SubType
SubType.prototype = new SuperType();

let instance = new SubType();
instance.colors.push("black");
console.log(instance.colors);

let instance2 = new SubType();
console.log(instance2.colors);
