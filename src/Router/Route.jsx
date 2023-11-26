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
        element: <AddArticle />,
      },
      {
        path: "/allArticle",
        element: <AllArticle />,
      },
      {
        path: "/myArticle",
        element: <MyArticle />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
    path: "/Dashboard",
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
