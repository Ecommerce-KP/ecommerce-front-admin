import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ROUTE } from "../configs/router";
import Login from "../pages/Login";
import { useAuth } from "../lib/context/AuthContext";
import DashboardPage from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import UserListPage from "../pages/user";

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
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <DashboardPage />,
        },
        {
          path: "/users",
          element: <UserListPage />,
        },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
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
