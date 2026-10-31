"use strict";
// 1=Typed Array
let names = ['Hamuda', 'Tood', 'Awale'];
let grades = [90, 80, 75];
let status1 = [true, false, true];
names.push(100); //here must be sring
names.push('Tood'); // correct
grades.push('Ali'); //here must be number
grades.push(80); // correcct
status1.push('true'); // and here must be boolean
status1.push(false); // correct
//2= Convert to TypeScript
let products = ['Phone', 'Laptop', 99];
products.push(99); // error, only string in Arrays
products.push('phone'); // correct
//3= Use Tuples for Fixed Values
let locations = ['Muqdisho', 2100, 14];
locations.push(true); // error, 1.array must be string
locations.push('muqdisho'); // correct
locations.push(false); //eror, seconde array must be number
locations.push(2100);
