import React, { useState, useEffect } from "react";
import { authService, googleAuthProvider } from "../../firebase";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [user, setUser] = useState();

  const loadGoogleUser = async () => {
    await authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  };

  const onSignInWithGoogle = () => {
    authService
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        // 나중에 필요할 때 사용
        // const credential = result.credential;
        // const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("!!Login Error!!");
        console.log(error);
      });
  };

  useEffect(() => {
    loadGoogleUser();
  }, []);

  return (
    <div className="loginpage">
      <h1 className="loginpage__title">Welcome</h1>
      {user ? (
        <h2 className="loginpage__username">{user.displayName}</h2>
      ) : (
        <h2 className="loginpage__username">Loading User...</h2>
      )}
      {user ? (
        <Link to="/home">
          <button className="loginpage__button">Continue</button>
        </Link>
      ) : (
        <button
          className="loginpage__button loginpage__button__signup"
          onClick={onSignInWithGoogle}
        >
          Sign up with Google
        </button>
      )}
    </div>
  );
};

export default LoginPage;
