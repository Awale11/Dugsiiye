
import { useParams, Link } from 'react-router'
// import { recipes } from './Recipes';

export const RecipeList = () => {

    const { recipeId } = useParams();

      const recipe = {
    id: 1,
    title: 'Sample Recipe',
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
  };

    // const recipeInfo = recipes.filter(recipe => recipe.id == recipeId)[0]
    

  return (
    <div className='bg-white rounded-lg shadow-sm p-6'>

        <Link
        className='text-rose-600 hover:text-rose-700 mb-4 inline-block'
        to='/recipes'
        >
            Back to Recipes
        </Link>

        <h2 className='text-3xl font-bold mb-6'>{recipe.title}</h2>

        <div className='grid md:grid-cols-2 gap-8'>
            <div>
                <h3 className='text-xl font-semibold mb-4'>Ingredients</h3>
                <ul className='list-disc list-inside space-y-2'>
                    {
                        recipe.ingredients.map((ingredient, index)=> (
                            <li key={index}>{ingredient}.</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h3 className='text-xl font-semibold mb-4'>instructions</h3>
                <ol className='list-decimal list-inside space-y-2'>
                    {
                        recipe.instructions.map((instruction, index)=> (
                            <li key={index}>{instruction}</li>
                        ))
                    }
                </ol>
            </div>
            
            
        </div>

    </div>
  )
}

