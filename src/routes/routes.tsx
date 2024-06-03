import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../configs/router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const routes = createBrowserRouter([
  { path: ROUTE.LOGIN, element: <Login /> },
  { path: ROUTE.DASHBOARD, element: <Dashboard /> },
]);
