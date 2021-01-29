import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { authService } from "../../firebase";

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

  const [user, setUser] = useState();

  const loadCurrentUser = async () => {
    await setUser(authService.currentUser);
    await console.log(user);
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <div className="profilepage">
      <header className="profilepage__header">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </header>
      <div className="profilepage__main">
        <div className="profilepage__userProfile">
          <div className="profilepage__userinfo">
            <h4 className="profilepage__userName">username</h4>
            <div className="profilepage__userDetail">userdetail</div>
          </div>
          <div>
            <button>Edit profile</button>
            <button>Log out</button>
          </div>
        </div>
        <div className="profilepage__posts">
          <ul>
            {dummyPosts.map((post) => (
              <li>
                <button>{post.question}</button>
                <p>{post.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
