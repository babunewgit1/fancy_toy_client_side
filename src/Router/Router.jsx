import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Details from "../Pages/Details/Details";
import Mytoys from "../Pages/Mytoys/Mytoys";
import Alltoy from "../Pages/Alltoy/Alltoy";
import PrivetRoute from "./PrivetRoute";
import NotFround from "../Pages/Shared/NotFound/NotFround";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFround></NotFround>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addtoy",
        element: <Addtoy></Addtoy>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "/mytoys",
        element: <Mytoys></Mytoys>,
      },
      {
        path: "/alltoy",
        element: <Alltoy></Alltoy>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
