import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ROUTE } from "../configs/router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../context/AuthContext";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic: RouteObject[] = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  const routesForAuthenticatedOnly: RouteObject[] = [
    {
      path: ROUTE.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <div>User Profile</div>,
    },
    {
      path: "/logout",
      element: <div>Logout</div>,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: ROUTE.LOGIN,
      element: <Login />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
