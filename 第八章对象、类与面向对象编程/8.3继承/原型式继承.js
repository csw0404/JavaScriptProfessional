function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let person = {
    name: "CSW",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob")
