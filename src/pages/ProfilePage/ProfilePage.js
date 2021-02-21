import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { authService } from "../../firebase";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import ProfilePost from "./ProfilePost";
import { SignalCellularNullOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import dummyPosts from "./dummyPosts.json";

const ProfilePage = () => {
  let history = useHistory();

  const [user, setUser] = useState(null);

  const loadCurrentUser = async () => {
    await authService.onAuthStateChanged((user) => {
      setUser({ ...user });
    });
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  const handleLogOut = () => {
    authService.signOut();
    history.push("/login");
  };

  return (
    <div className="profilepage">
      <header className="profilepage__header">
        <Link to="/home">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </header>
      <section className="profilepage__main">
        <div className="profilepage__userProfile">
          <div className="profilepage__userInfo">
            <img className="profilepage__userPic" src={user?.photoURL} />
            <h4 className="profilepage__userName">{user?.displayName}</h4>
          </div>
          <div className="profilepage__btnGroup">
            <button>Edit Username</button>
            <button onClick={handleLogOut}>Log out</button>
          </div>
        </div>
        <div className="profilepage__postlistWrapper">
          <ul className="profilepage__postlist">
            {dummyPosts.map((post) => (
              <li>
                <ProfilePost post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
