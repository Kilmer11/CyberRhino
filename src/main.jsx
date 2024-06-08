import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import Login from './pages/login.jsx';
import Design from './pages/design-page.jsx';
import Hardware from './pages/hardware-page.jsx';
import Software from './pages/software-page.jsx';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App/>,
  },
  { 
    path: "home", 
    element: <App/>,
  },
  {
    path: "services/design",
    element: <Design/>
  },
  {
    path: "services/hardware",
    element: <Hardware/>
  },
  {
    path: "services/software",
    element: <Software/>
  },
  {
    path: "login",
    element: <Login/>
  }
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
