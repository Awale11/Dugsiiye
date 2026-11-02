"use strict";
//1: UserRole Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "superadmin";
    UserRole["MODERATOR"] = "moderator";
    UserRole["VIEWER"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.VIEWER;
}
console.log(canEdit(UserRole.ADMIN)); // true
console.log(canEdit(UserRole.MODERATOR)); // true
console.log(canEdit(UserRole.VIEWER)); // false
//2: Type Assertion with as
const button = document.querySelector('button');
button.disabled = true; // error
const button1 = document.querySelector('button');
button1.disabled = true; // Fixed the error with using as..
