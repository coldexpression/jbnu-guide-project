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
    <div>
      <h1>Welcome</h1>
      {user && <h2>{user.displayName}</h2>}
      {user ? (
        <Link to="/home">
          <button>Continue</button>
        </Link>
      ) : (
        <button onClick={onSignInWithGoogle}>Sign up with Google</button>
      )}
    </div>
  );
};

export default LoginPage;
