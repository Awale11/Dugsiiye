//1: UserRole Enum Usage
enum UserRole  {
    ADMIN = 'superadmin',
    MODERATOR = 'moderator',
    VIEWER = 'viewer'
}
function canEdit(role: UserRole): boolean {
  return role !== UserRole.VIEWER
}
console.log(canEdit(UserRole.ADMIN)); // true
console.log(canEdit(UserRole.MODERATOR)); // true
console.log(canEdit(UserRole.VIEWER)); // false

//2: Type Assertion with as
const button = document.querySelector('button');
button.disabled = true; // error

const button1 = document.querySelector('button') as HTMLButtonElement;
button1.disabled = true; // Fixed the error with using as..

