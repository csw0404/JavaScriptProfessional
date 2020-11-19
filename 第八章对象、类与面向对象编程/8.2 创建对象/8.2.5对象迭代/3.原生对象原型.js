console.log(typeof Array.prototype.sort);
console.log(typeof String.prototype.substring);

String.prototype.StartWith = function (text) {
    return this.indexOf(text) === 0;
};
let msg = "Hello world!";
console.log(msg.startsWith("Hello"));
