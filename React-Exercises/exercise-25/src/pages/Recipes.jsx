import { Link } from "react-router";

  export const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ]
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'lunch'
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'breakfast'
  }
];

export const Recipes = () => {

  

  return (

    <div>
        <h2 className="text-3xl font-bold mb-6">All Recipes</h2>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                recipes.map(recipes=> (
                    <li 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:bg-gray-100"
                    key={recipes.id}>
                        <Link 
                        to={`/recipes/${recipes.id}`}>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{recipes.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{recipes.description}</p>
                            <span className="inlien-block bg-rose-100 text-rose-800 text-sm px-2 py-1 rounded">{recipes.category}</span>
                        </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
