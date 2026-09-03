import { Link, useParams } from "react-router"

 const allRecipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts'
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner'
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
  },
  {
    id: 5,
    title: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert',
    category: 'desserts'
  }
];

export const CategoryRecipes = () => {

    const { categoryId } = useParams();

    const recipes = allRecipes.filter(recipe=> recipe.category === categoryId);
    
  return (

    <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold mb-4 capitalize">{categoryId} Recipes</h1>

        {recipes.length > 0 ? (
            <div className="grid gap-4">
                {recipes.map(recipe => (
                    <Link
                    className="block p-4 border rounded-md hover:border-rose-500 hover:bg-rose-50"
                    key={recipe.id}
                    to={`/recipes/${recipe.id}`}
                    >
                        <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                        <p className="text-sm text-gray-700">{recipe.description}</p>

                    </Link>
                ))}
            </div>
        ) : (
            <p className="text-gray-700">No Recipes Here</p>
        )}
    </div>
  )
}
