import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { authService } from "../../firebase";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import ProfilePost from "./ProfilePost";

const ProfilePage = () => {
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

  const [user, setUser] = useState({ id: "kimyb" });

  // const loadCurrentUser = async () => {
  //   await setUser(authService.currentUser);
  //   await console.log(user);
  // };

  // useEffect(() => {
  //   loadCurrentUser();
  // }, []);

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
            <img
              className="profilepage__userPic"
              src="https://images.unsplash.com/photo-1600267185393-e158a98703de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <h4 className="profilepage__userName">username</h4>
            {/* <div className="profilepage__userDetail">userdetail</div> */}
          </div>
          <div className="profilepage__btnGroup">
            <button>Edit profile</button>
            <button>Log out</button>
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
