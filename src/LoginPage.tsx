import { Link, useLocation } from "react-router-dom";

const LoginPage = () => {
  let location = useLocation();
  let state = location.state as {from: string};

  const { from } = state || "Not";
  
  if (location.state && state.from) {
    console.log("From " + from);
  } else {
    console.log("From nowhere");
  }

  return (
    <div>
      <div>Login Page</div>
      <Link to="/signin">
        <button>Signin</button>
      </Link>
    </div>
  );
};

export default LoginPage;
