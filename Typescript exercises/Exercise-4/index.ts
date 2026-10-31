//1.  Define and Use an Interface
interface User {
    username: string;
    password: string;
}
function login(user: User) : void {
    console.log(user.username, user.password)
}
login({username: 'Awale', password: '123456'})

//2. Use Optional Properties
interface User1 {
    username: string;
    password: string;
    email?: string;
}
function login1(user1: User1) {
    console.log(user1.username, user1.password, user1.email)
}
login1({username: 'Moha', password: '654321'}) // without email
login1({username: 'Moha', password: '654321', email: 'example@gmail.com'}) // with email

// 3. Readonly in Action
interface User2 {
    username: string;
    password: string;
    email?: string;
    readonly id: number;
}
const login2: User2 = {
    username: 'Hamuuda',
    password: 'hamuda12',
    id: 123456
} // correct

login2.id = 654321 // error, we cant the change the value of id beacuse it is readonly

console.log(login2.username, login2.password, login2.id, login2.email);
