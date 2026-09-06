import { useRouteError, Link } from "react-router"


const NotFound = () => {

    const error = useRouteError();

  return (

    <div className="min-h-screen text-center mb-4">
        <h2 className=" text-lg text-red-500 font-bold mt-1">Error</h2>
        <p className="text-md text-gray-600">{error.statusText || error.message}</p>
        <p className="text-md text-gray-600 mb-4">!Sorry, this page doesn't exist!</p>
        <Link 
        className="text-white bg-rose-500 rounded p-2 hover:bg-rose-700"
        to='/'>Go bact to Home page</Link>
    </div>
  )
}

export default NotFound