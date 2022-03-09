import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Login = () => {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to="/" replace />;
  }
  window.location.replace('https://www.google.com')
  // return <Navigate to={{pathname: "https://www.goodreads.com/"}} />;
  return <></>
};

export default Login;
