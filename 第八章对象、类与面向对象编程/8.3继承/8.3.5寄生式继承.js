function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
// object();
// Object.create
function createAnother(original) {
    let clone = object(original);
    // let clone = Object.create(original);    //通过调用函数创建一个新对象
    clone.sayHi = function () {             //以某种方式增强这个对象
        console.log("hi");
    };
    return clone;                           //返回这个对象
}

let person = {
    name: "csw",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = createAnother(person);
anotherPerson.sayHi();
