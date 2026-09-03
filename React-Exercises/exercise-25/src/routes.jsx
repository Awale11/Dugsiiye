import { createBrowserRouter } from "react-router";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Categories } from "./pages/Categories";
import { RecipeList } from "./pages/RecipeList";
import { CategoryRecipes } from "./CategoryRecipes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'recipes',
                element: <Recipes/>
            },
            {
                path: 'recipes/:recipeId',
                element: <RecipeList/>

            },
            {
                path: 'categories',
                element: <Categories/>,
                children: [
                    {
                        path: ':categoryId',
                        element: <CategoryRecipes/>
                    }
                ]
            }
        ]
    }
])

export default router;