"use strict";
function login(user) {
    console.log(user.username, user.password);
}
login({ username: 'Awale', password: '123456' });
function login1(user1) {
    console.log(user1.username, user1.password, user1.email);
}
login1({ username: 'Moha', password: '654321' }); // without email
login1({ username: 'Moha', password: '654321', email: 'example@gmail.com' }); // with email
const login2 = {
    username: 'Hamuuda',
    password: 'hamuda12',
    id: 123456
}; // correct
login2.id = 654321; // error, we cant the change the value of id beacuse it is readonly
console.log(login2.username, login2.password, login2.id, login2.email);
