import { Navigate, Route, useLocation } from "react-router-dom";
import { ACCESS_TOKEN } from "./constants";
import useAuth from "./hooks/useAuth";

type ProtectedRouteType = {
  element: JSX.Element;
  isAuthenticated: boolean;
  acceptedRoles: string[];
  path: string;
};

const ProtectedRoute: React.FC<ProtectedRouteType> = ({ element, acceptedRoles, isAuthenticated, ...rest }) => {
  const auth = useAuth();
  let location = useLocation();
  let token = localStorage.getItem(ACCESS_TOKEN);

  if (!token) {
    // if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to="/signin" state={{ from: location.pathname }} replace />
    );
  }
  console.log("LOCATION" + location.pathname);

  if (auth.user && acceptedRoles.includes(auth.user.role)) {
  }
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
