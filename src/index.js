import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectPage from './Routes/ProjectPage/ProjectPage';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/project/:id",
    element: <ProjectPage/>
  },
  {
    path: "*",
    element: <Home/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


