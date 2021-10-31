import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import google from "../../images/google.png";
import "./Login.css";

const Login = () => {
  const { googleSignIn, setUser } = useAuth();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setUser(result.user);
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login">
      <h2 className="text-center">Log In</h2>
      <div className="login-container">
        <img src={google} alt="" />
        <input
          onClick={handleGoogleSignIn}
          type="submit"
          value="Google Sign In"
        />
      </div>
    </div>
  );
};

export default Login;
