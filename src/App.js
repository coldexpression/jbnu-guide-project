import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { authService } from "./firebase";
import Initializing from "./pages/LoginPage/Initializing";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init ? (
        <Router>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/home">
              <MainPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
          <Redirect from="*" to="/login" />
        </Router>
      ) : (
        <Initializing />
      )}
    </div>
  );
}

export default App;
