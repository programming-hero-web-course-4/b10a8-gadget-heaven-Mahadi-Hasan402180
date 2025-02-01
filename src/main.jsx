import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'products/:product_id',
        element:<GadgetDetails></GadgetDetails>,
        loader:()=>fetch("/productsData.json")
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
