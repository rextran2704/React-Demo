import { useState } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ACCESS_TOKEN } from '../constants';


const OAuth2RedirectHandler = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  let token = searchParams.get("token");

  let from = sessionStorage.getItem("FROM") || "/";
  console.log("FROM TO LOGIN" + from)

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    return <Navigate to={from} replace/>
  }

  console.log(location);
  return <Navigate to={from} state={{ from: from }} replace />;
};

export default OAuth2RedirectHandler;
