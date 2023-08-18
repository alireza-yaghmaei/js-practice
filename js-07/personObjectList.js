"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
let arr = [];
const addPerson = (id, name, familyName, age, job, marriageStatus, gender, height, weight, phoneNumber) => {
    let person = {
        id,
        name,
        familyName,
        age,
        job,
        marriageStatus,
        gender,
        height,
        weight,
        phoneNumber
    };
    arr.push(person);
    return (arr);
};
const deletePerson = (id) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]["id"] === id) {
            arr.splice(index, 1);
        }
    }
    return (arr);
};
const editPerson = (id, name, familyName, age, job, marriageStatus, gender, height, weight, phoneNumber) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]["id"] === id) {
            deletePerson(id);
            addPerson(id, name, familyName, age, job, marriageStatus, gender, height, weight, phoneNumber);
            return (arr);
        }
    }
    return (arr);
};
const sortPerson = () => {
    const sorted = (0, lodash_1.orderBy)(arr, ["name"], ["asc"]);
    return (sorted);
};
addPerson(111, "Ali", "Shokari", 19, "student", "single", "male", 175, 80, "09121112223");
addPerson(222, "Reza", "Goodarz", 27, "engineer", "married", "male", 170, 75, "09121112224");
addPerson(333, "Maryam", "Ghasemi", 31, "doctor", "married", "female", 171, 70, "09121112225");
console.log(arr);
console.log("");
editPerson(111, "Shahram", "Solati", 19, "student", "single", "male", 175, 80, "09121112223");
console.log(arr);
console.log("");
deletePerson(222);
console.log(arr);
console.log("");
addPerson(222, "Ali", "Goodarz", 27, "engineer", "married", "male", 170, 75, "09121112224");
console.log(sortPerson());
