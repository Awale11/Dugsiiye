// Challenge Title: Create a Login Form with Conditional Rendering

// 1. **Create** a `LoginForm` component that:
//     - Displays input fields for username and password.
//     - Shows a "Login" button.
// 2. **Implement State Management:**
//     - Use `useState` to manage form inputs and authentication status.
// 3. **Implement Conditional Rendering:**
//     - Before login, display the login form.
//     - After a successful login (simulate login on form submission), display a welcome message with the username.
//     - Include a "Logout" button to reset the authentication state.

import { useState } from "react";

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false);
    
    const handleLogin =(e) => {
        e.preventDefault();
        if(userName && password) {
            setIsLogged(true);
        }
    };
        
    const handleLogout = ()=> {
        setUserName('');
        setPassword('');
        setIsLogged(false);
    };

    if (isLogged) {
        return (
            <div>
            <h1>Welcome, {userName}!</h1>
            <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
 return (

    <form onSubmit={handleLogin}>
             <h1>Login Form</h1>
            <div>
                <label>Username: 
                <input type="text"
                value={userName} 
                onChange={(e)=> setUserName(e.target.value)}
                required
                />
                </label>
                </div>

                <div>
                    <label>Password:  
                    <input type="Password" 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                    </label>
                    </div>
                    <button type="submit">Login</button>
                </form>
    )
}
export default LoginForm;

// EXPLANATION

// statler = 
// const [userName, setUserName] = useState("");
//const [password, setPassword] = useState("");
// yani Kullanıcının yazdığı username ve password burada tutuluyor.

//const [isLogged, setIsLogged] = useState(false); yani Bu bize şunu söylüyor:Kullanıcı giriş yapmış mı? Başlangıçta:isLogged = false yani: Hayır, giriş yapmadı.Login başarılı olduğunda:setIsLogged(true);olur.Artık:isLogged = true Yani:Kullanıcı giriş yaptı.

// value={userName}=Input'un değeri userName state'inden gelsin demek.
// onChange={(e) => setUserName(e.target.value)} yani Kullanıcı input'a bir şey yazdığında state'i güncelle.

// (e) =form event'ini temsil ediyor.React bize submit olayının bilgisini veriyor.

// e.preventDefault() Normal HTML formunda submit yaptığında browser sayfayı yenileyebilir.Biz bunu istemiyoruz.Bu yüzden: e.preventDefault();diyoruz.Anlamı:Browser'ın normal form submit davranışını durdur. Yani React uygulamamız sayfa yenilenmeden çalışmaya devam ediyor.

// if (userName && password)= Bunu basitçe: Username dolu mu VE password dolu mu? bakiyoruz eger ikisi de doluysa true setIsLogged(true) calistiri. yoksa login yapamayiz.

// if (isLogged) {
   // return (
       // <div>
        //    <h1>Welcome, {userName}!</h1>
        //    <button onClick={handleLogout}>Logout</button>
     //   </div>
  //  );
//} Yani:

//isLogged === false
       // ↓
//Login Form

//ama:

//isLogged === true
       // ↓
//Welcome Screen

//Bu React'te conditional rendering.

