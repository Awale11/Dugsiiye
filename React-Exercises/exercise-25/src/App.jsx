
import { Outlet, NavLink } from 'react-router'

function App() {


  return (
    <div className='min-h-screen bg-gray-100'>
        {/* Navbar */}
          <nav className='bg-white shadow-md p-2'>
            <header className='max-w-4xl mx-auto flex items-center justify-between'>
               <h1 className='text-2xl font-bold text-rose-600'>Recipe Book</h1>
               <div className='space-x-6'>
                <NavLink className={({isActive})=> `hover:text-rose-600 ${isActive ? 'text-rose-600 font-bold' : 'text-gray-600'}`} to='/'
            > Home</NavLink>

            <NavLink className={({isActive})=> `hover:text-rose-600 ${isActive ? 'text-rose-600 font-bold' : 'text-gray-600'}`} to='/recipes'
            > Recipes</NavLink>

            <NavLink className={({isActive})=> `hover:text-rose-600 ${isActive ? 'text-rose-600 font-bold' : 'text-gray-600'}`} to='/categories'
            > Categories</NavLink>
               </div>
            </header>
           </nav>
        
        <main className='max-w-4xl mx-auto p-6'>
          <Outlet/>
        </main>
    </div>
  )
}

export default App
