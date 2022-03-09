import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OAuth2RedirectHandler from "./auth/OAuth2RedirectHandler";
import { AuthProvider } from "./contexts/AuthContext";
import FunctionContextComponent from "./FunctionContextComponent";
import Header from "./Header";
import HomePage from "./HomePage";
import Login from "./Login";
import LoginPage from "./LoginPage";
import PrivatePage from "./PrivatePage";
import PrivateRoute from "./PrivateRoute";
import PublicPage from "./PublicPage";
import { ThemeProvider } from "./ThemeNewContext";
import { authRoles } from "./auth/AuthRoles";
import ProtectedRoute from "./ProtectedRoute";
import PrivateAdmin from "./admin/PrivateAdmin";
import DashboardAdmin from "./admin/DashboardAdmin";
import Layout from "./Layout";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/public" element={<PublicPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signin" element={<Login />} />
            </Route>

            <Route
              path="/oauth2/redirect"
              element={<OAuth2RedirectHandler />}
            ></Route>
            <Route
              path="/private"
              element={
                <PrivateRoute
                  isAuthenticated={true}
                  acceptedRoles={authRoles.admin}
                >
                  <PrivatePage />
                </PrivateRoute>
              }
            />
            <Route
              path="admin"
              element={<PrivateAdmin acceptedRoles={authRoles.admin} />}
            >
              <Route path="dashboard" element={<DashboardAdmin />} />
            </Route>

            {/* <ProtectedRoute
              path="/private"
              isAuthenticated={true}
              acceptedRoles={authRoles.admin}
              element={<PrivatePage />}
            /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
