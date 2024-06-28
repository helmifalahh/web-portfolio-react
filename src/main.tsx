import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import BangkitPage from './scenes/blog/bangkit/BangkitPage.tsx';
import CPSPage from './scenes/blog/cps/CPSPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/blog-bangkit",
    element: <BangkitPage/>,
  },
  {
    path: "/blog-cps",
    element: <CPSPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
