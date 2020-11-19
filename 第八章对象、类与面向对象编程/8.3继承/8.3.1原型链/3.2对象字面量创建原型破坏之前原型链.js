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

// 通过对象字面量添加新方法，这会导致上一行无效
SubType.prototype = {
    getSubValue() {
        return this.subproperty;
    },

    someOtherMethod() {
        return false;
    }
};

let instance = new SubType();
console.log(instance instanceof Object);
console.log(instance instanceof SubType);
console.log(instance instanceof SuperType);
// console.log(instance.getSuperValue());
