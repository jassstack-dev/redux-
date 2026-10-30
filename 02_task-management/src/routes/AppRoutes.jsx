
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import Task from '../pages/Task'
import AddTask from '../pages/AddTask'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'tasks',
                    element:<Task/>
                },{
                path:'add',
                element:<AddTask/>
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes