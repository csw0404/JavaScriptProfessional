function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();

// 新方法
SuperType.prototype.getSubValue = function () {
    return this.subproperty;
};

// 覆盖已有的方法
SubType.prototype.getSuperValue = function () {
    return "已经覆盖---原型未更改";
};

let instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue())

