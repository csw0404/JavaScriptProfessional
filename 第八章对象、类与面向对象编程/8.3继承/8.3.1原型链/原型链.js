function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

// 继承SubperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

let instance = new SubType();
console.log(instance.getSubValue());
console.log(instance.getSuperValue());
// constructor 重写指向
console.log(instance.constructor);    // [Function: SuperType]
console.log(instance.toString());    // SubType继承SuperType, SuperType继承Object

console.log(instance instanceof SubType);
console.log(instance instanceof SuperType);
console.log(instance instanceof Object);
console.log("---分割线---");
console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));
