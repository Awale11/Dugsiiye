import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";

 export const router = createBrowserRouter([
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
                // /posts/ sonrasında ne varsa onu postId olarak kabul et.
                path: 'posts/:postId',
                element: <Post/>
            },
            {
                path: 'create',
                element: (
                    <ProtectedRoute>
                        <CreatePost/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'login',
                element: <Login/>
            }

        ]
    }
]);