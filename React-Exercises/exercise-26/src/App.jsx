import { useContext } from "react"
import { NavLink, Outlet } from "react-router"
import { AuthContext } from "./context/AuthContext"


const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (

    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 py-4 px-4">React Blog</h1>
      <nav className="bg-gray-100 shadow-md p-4 m-4 space-x-4">
          <NavLink
            className={({isActive})=> `hover:text-blue-600 ${isActive ? 'text-white font-bold bg-blue-500 p-2 rounded' : 'text-gray-600 '}`}
            to='/'>Home</NavLink> | {''}
            {isAuthenticated ? (
            <>
          <NavLink 
              className={({ isActive })=> `hover:text-blue-600 ${isActive ? 'text-white font-bold bg-blue-500 p-2 rounded' : 'text-gray-600'}`}
              to='/create'>Create Post</NavLink> | {''}
              <button
              className="bg-rose-600 text-white p-2 rounded font-bold cursor-pointer hover:bg-rose-700"
               onClick={logout}>Logout</button>
            </>
          ) : (
          <NavLink
          className={({isActive})=> `hover:text-rose-700 ${isActive ? 'text-white font-bold bg-rose-500 p-2 rounded' : 'text-gray-600'}`}
           to='/login'>Login</NavLink>
          )}
      </nav>
      {/* child routes burada render edilir */}
      <Outlet/>
    </div>
  )
}

export default App
