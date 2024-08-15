import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Registry from './Components/Pages/Registration/Registry';

// Define the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/register',
        element:<Registry/>
      }
    ]
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
