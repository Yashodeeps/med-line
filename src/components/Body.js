import React from 'react'
import Login from './Login';
import Dashboard from './Dashboard';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/Dashboard",
            element: <Dashboard />
        }
        
    ])

    
      
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;