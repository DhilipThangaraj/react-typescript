"use strict";
//Basic Types
let id = 10;
let company = "Heisan tech";
let isPublished = true;
let x = "hello";
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//tuple
let person = [1, "dhilip", true];
//tuple array
let employee;
employee = [
    [1, "dhilip"],
    [2, "kumar"],
    [3, "dhilip kumar"],
];
//union
let pid;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
let user = {
    id: 1,
    name: "dhilip",
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 100;
//Functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(1, 2));
//void -- no return
function getMessage(message) {
    console.log(message);
}
console.log(getMessage(1));
console.log(getMessage("one"));
const user1 = {
    id: 1,
    name: "dhilip",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} got registered with us`;
    }
}
const dhilip = new Person(1, "dhilip");
const kumar = new Person(2, "kumar");
//dhilip.id = 101;
console.log(dhilip, kumar);
console.log(dhilip.register());
//Sub class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(121, "Dhilip Thanga", "Senior Developer");
console.log(emp);
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "dhilip"]);
numArray.push("Hello");
console.log(numArray);
//i want to push the same data type in a array not others
function getArray1(items) {
    return new Array().concat(items);
}
let numArray1 = getArray1([1, 2, 3, 4]);
let strArray1 = getArray1(["brad", "dhilip"]);
// numArray1.push("Hello"); - will get error
console.log(numArray1);
console.log(strArray1);
