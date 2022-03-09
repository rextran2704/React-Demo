import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ACCESS_TOKEN } from "./constants";
import useAuth from "./hooks/useAuth";

interface PrivateRouteType {
  children: JSX.Element;
  isAuthenticated: boolean;
  acceptedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteType> = ({
  children,
  isAuthenticated,
  acceptedRoles,
  ...rest
}: PrivateRouteType) => {
  const auth = useAuth();
  let location = useLocation();
  let token = localStorage.getItem(ACCESS_TOKEN);

  if (!token) {
  // if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
  }
  console.log("LOCATION" + location.pathname);

  if (auth.user && acceptedRoles.includes(auth.user.role)) {

  }
  
  return children;
};

export default PrivateRoute;
