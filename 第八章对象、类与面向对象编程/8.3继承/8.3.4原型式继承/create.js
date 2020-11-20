let person = {
    name: "CSW",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = Object.create(person);
anotherPerson.name = "CSW";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);

let anotherPerson2 = Object.create(person, {
    name: {
        value: "RJL"
    }
});
console.log(anotherPerson2.name);
console.log(person.name);
