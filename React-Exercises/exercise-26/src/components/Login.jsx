import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useLocation, useNavigate } from "react-router";


const Login = () => {

const { login } = useContext(AuthContext);

const navigate = useNavigate();

const location = useLocation();

const handleLogin = ()=> {
  login();

  const from = location.state?.from?.pathname || '/';
  navigate(from, {replace: true})
};

  return (

    <div className="min-h-creen">
      <h2 className="text-lg font-semibold">Login</h2>
      <p className="text-gray-800">You must log in to access the create post page...</p>
      <button 
      className="bg-blue-500 text-white p-2 rounded font-bold cursor-pointer hover:bg-blue-600 mt-1"
      onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login;