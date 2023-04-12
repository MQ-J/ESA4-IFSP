import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/ESA4-IFSP/",
    element: <App/>,
  },
  {
    path: "/ESA4-IFSP/sistem/:user",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
