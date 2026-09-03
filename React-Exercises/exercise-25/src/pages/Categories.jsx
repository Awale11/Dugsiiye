import { Link, Outlet } from "react-router";

 const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Evening meals'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats'
  }
];

export const Categories = () => {

  
  return (

    <div className="grid md:grid-cols-[300px,1fr] gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold mb-6">Categories</h1>
            <div className="space-x-2">
                {
                    categories.map(category=> (
                        <Link
                        className="block p-3 rounded hover:bg-rose-50 hover:text-rose-700"
                        key={category.id}
                        to={`/categories/${category.id}`}
                        >
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-700">{category.description}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
       

            <div>
                <Outlet/>
            </div>
    </div>
  )
}
