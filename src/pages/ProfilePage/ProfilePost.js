import React, { useState } from "react";
import "./ProfilePost.css";

const ProfilePost = ({ post }) => {
  const [isPostActive, setIsPostActive] = useState(false);

  const handlePostActive = () => {
    setIsPostActive(!isPostActive);
  };

  const { id, question, answer } = post;
  return (
    <div className="profilepage__post">
      {/* 해당답변이 보여질 카드 */}
      <button onClick={handlePostActive}>{question}</button>
      {/* 질문사항이 보여질 버튼*/}
      <p className={isPostActive ? "active" : "nonActive"}>
        {isPostActive ? answer : ""}
      </p>
    </div>
  );
};

export default ProfilePost;
