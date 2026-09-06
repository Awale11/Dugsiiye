import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router";


const ProtectedRoute = ({ children }) => {

const { isAuthenticated} = useContext(AuthContext);

const location = useLocation();

if(!isAuthenticated) {
  return (
    <Navigate to='/login' state={{ from: location}} replace/>
  )
};
  return children;
};

export default ProtectedRoute