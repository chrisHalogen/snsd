import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.css";
import "./global.scss";
import { Sidebar, Footer, Topbar } from "./components";
import {
  Cameras,
  Charts,
  Dashboard,
  FullVideos,
  GPS,
  Logs,
  Profile,
  Settings,
  Users,
  Violations,
  Login,
} from "./pages";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Sidebar />
        <div className="contentContainer">
          <Topbar />
          {/* <hr /> */}
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/charts",
          element: <Charts />,
        },
        {
          path: "/violations",
          element: <Violations />,
        },
        {
          path: "/full-videos",
          element: <FullVideos />,
        },
        {
          path: "/gps",
          element: <GPS />,
        },
        {
          path: "/cameras",
          element: <Cameras />,
        },
        {
          path: "/logs",
          element: <Logs />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
