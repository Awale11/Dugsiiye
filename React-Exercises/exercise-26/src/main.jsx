import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { PostsProvider } from './context/PostsContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
           <RouterProvider router={router}/>
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
