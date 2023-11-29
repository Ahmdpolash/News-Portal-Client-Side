import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArticle from "../Pages/AddArticle/AddArticle";
import AllArticle from "../Pages/AllArticle/AllArticle";
import MyArticle from "../Pages/MyArticle/MyArticle";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/Allusers";
import AddPublisher from "../Pages/Dashboard/AddPublisher/AddPublisher";
import AdminArticle from "../Pages/Dashboard/AdminArticle/AdminArticle";
import Profile from "../Pages/Profile/Profile";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import PrivateRoute from "../Router/PrivateRoute";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Update from "../Pages/Update/Update";
import Details from "../Pages/Details/Details";
import Premium from "../Pages/Premium/Premium";
import Subscription from "../Pages/Subcription/Subscription";
import PayNow from "../Pages/Payment/PayNow";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addArticle",
        element: (
          <PrivateRoute>
            {" "}
            <AddArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArticle",
        element: (
          <PrivateRoute>
            <AllArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/myArticle",
        element: (
          <PrivateRoute>
            <MyArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/update/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/premium",
        element: (
          <PrivateRoute>
            <Premium />
          </PrivateRoute>
        ),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: <PayNow />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // =====================Admin routes===============================//
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "publisher",
        element: <AddPublisher />,
      },
      {
        path: "adminArticle",
        element: <AdminArticle />,
      },
    ],
  },
]);

export default Route;
