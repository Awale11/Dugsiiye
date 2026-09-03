import { Link } from "react-router"

export const Home = () => {

  return (

    <div className="text-center ">
        <h1 className="text-4xl font-bold mb-6">Welcome to Recipe Book</h1>
        <p className="text-xl text-gray-700 mb-6">Discover delicious recipes and start cooking today!</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto ">

                {/* Goes to the Recipes page */}
            <Link
            className="bg-rose-600 text-white p-6 rounded-lg shadow-md hover:bg-rose-700"
            to='/recipes'
            >
                <h2 className="text-2xl font-bold mb-2">Browse Recipes</h2>
                <p className="text-md">Explore our collection of delicious recipes</p>
            </Link>

                {/* Goes to the categories page */}
            <Link
            className="bg-rose-600 text-white rounded-lg shadow-md p-6 hover:bg-rose-700 transition-colors"
            to='/categories'
            >
                    <h2 className="text-2xl font-bold mb-2">Recipe Categories</h2>
                    <p className="text-md">Find recipes by category</p>
            </Link>
        </div>
    </div>
  )
}
