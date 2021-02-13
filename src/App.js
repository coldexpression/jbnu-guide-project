import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {Provider} from 'react-redux';
import store from './pages/MainPage/store';

function App() {
  return (
    <div className="App">
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
      </Router>
    </div>
  );
}

export default App;
