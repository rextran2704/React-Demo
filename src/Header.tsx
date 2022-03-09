import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Header = () => {
  const themeStyles = {
    backgroundColor: "#CCC",
    height: "50px",
  };

  let auth = useAuth();
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div style={themeStyles}>
      <span>Header</span>
      <span style={{ margin: "0 10px" }}>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="public">Public</Link>
      </span>
      {auth.user ? (
        <button
          onClick={() => {
            auth.logout(() => navigate("/"));
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            sessionStorage.setItem("FROM", location.pathname);
            navigate("/signin");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
