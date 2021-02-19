import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { authService } from "../../firebase";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import ProfilePost from "./ProfilePost";
import { SignalCellularNullOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  let history = useHistory();
  // 유저가 스크랩해둔 자료들은 추후 리덕스를 통해 가져옴
  const [dummyPosts, setDummyPosts] = useState([
    { id: 1, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 2, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 3, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 4, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 5, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 6, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 7, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 8, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 9, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
    { id: 10, question: "Q. 테스트 질문사항", answer: "A. blahblah" },
  ]);

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
