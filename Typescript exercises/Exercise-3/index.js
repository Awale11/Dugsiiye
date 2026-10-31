"use strict";
//1=Adding Types to a Function
function fullName(first, last) {
    return first + ' ' + last;
}
console.log(fullName('Abdi', 'Awale'));
//2=Optional and Default Parametrs
function registerUser(username, isAdmin, language = 'En') {
    console.log(`[${isAdmin || 'unkown'}] ${username} ${language}`);
}
registerUser('Awale', true, 'Fr'); // here all inputs wanso baasnay. if we want isAdmin and language we dont pass, they are oprional
//3=Create a Safe Rest Function
function average(...scores) {
    const total = scores.reduce((a, b) => a + b, 0);
    return total / scores.length;
}
console.log(average(10, 'true', 30)); // eror
console.log(average(10, 20, 30, 40, 50)); // correct
