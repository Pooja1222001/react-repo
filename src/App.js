import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Ecommerce from './e-commerce';
import Cart from "./cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ecommerce/>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
  //  <Ecommerce/>
  <RouterProvider router={router} />
  );
}

export default App;
