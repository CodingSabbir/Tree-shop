import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from "./home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
     {
      path: "/",
      element:<Home/>,
     }
    ]
   
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);