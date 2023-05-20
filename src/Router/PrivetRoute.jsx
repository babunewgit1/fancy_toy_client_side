import React, { useContext } from "react";
import { AuthContext } from "../AuthProvidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  let location = useLocation();
  if (currentUser) {
    return children;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
