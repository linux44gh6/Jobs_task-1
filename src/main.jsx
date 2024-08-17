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
import AuthProvider from './Provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Root from './RootLayout/Root';
const queryClient = new QueryClient()
// Define the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/register',
        element:<Registry/>
      },
    ]
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </QueryClientProvider>
  </StrictMode>,
);
