// 1=Typed Array

let names: string[] = ['Hamuda', 'Tood', 'Awale'];

let grades: number[] = [90, 80, 75];

let status1: boolean[] = [true, false, true];

names.push(100); //here must be sring
names.push('Tood'); // correct

grades.push('Ali'); //here must be number
grades.push(80); // correcct

status1.push('true'); // and here must be boolean
status1.push(false); // correct

//2= Convert to TypeScript

let products: string[] = ['Phone', 'Laptop'];
products.push(99); // error
products.push('phone'); // correct

//3= Use Tuples for Fixed Values

let locations: [string, number, number] = ['Muqdisho', 2100, 14.976];

let locations1: [string, number, number] = [41, 'istanbul', 21] // error