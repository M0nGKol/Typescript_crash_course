"use strict";
let id = 5;
let sentence = 'This is my first typescript';
let isTrue = true;
let x = "Hello";
//Array
let ids = [1, 2, 'name', true, 1.2345];
//Tuple
let person = [1, 'name', true];
//Tuple Array
let employee;
employee = [
    [1, 'name1'],
    [1, 'name3'],
    [1, 'name2'],
];
//Union
let people;
people = '2';
people = 2;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
//Type Assertion
let cid = 1;
let customerId = cid; // or cid as number
//Function
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered. `;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const mk = new Person(1, 'mongkol');
console.log(mk.register());
const emp = new Employee(3, 'Mouygech', 'Girlfriend');
console.log(emp.register());
