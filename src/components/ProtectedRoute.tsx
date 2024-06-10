import { useAuth } from "../lib/context/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
