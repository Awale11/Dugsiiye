"use strict";
//1:Echo Function with Generics
function echo(input) {
    return input;
}
const string = echo('Hamuuda');
const number = echo(10);
const array = echo([10, 20, 20]);
const object = echo({
    name: 'Dugsiiye',
    teacher: 'Tood',
    id: '10'
});
console.log(string, number, array, object);
const StringResult = {
    status: 'pending',
    data: 'course'
};
const userResult = {
    status: 'completed',
    data: {
        id: 321,
        name: 'Hasan'
    }
};
console.log(userResult, StringResult);
// 3: First Element Function
function first(items) {
    return items[0];
}
const firstNumber = first([80, 90, 10]);
const firstString = first(['Amina', 'Hodan', 'Hani']);
const firstObject = first([
    { id: 10, name: 'Farah', success: false },
    { id: 20, name: 'Xalimo', success: true }
]);
console.log(firstNumber, firstString, firstObject);
