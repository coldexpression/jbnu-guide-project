import React, { useState, useEffect } from "react";
import "./ProfilePost.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ReportIcon from "@material-ui/icons/Report";

const ProfilePost = ({ post }) => {
  const { id, question, answer, classified } = post;

  const [isPostActive, setIsPostActive] = useState(false);
  const [buttonColor, setButtonColor] = useState("de726b");

  function chooseButtonColor() {
    switch (classified) {
      case "전공":
        setButtonColor("color78934F");
        break;
      case "생활":
        setButtonColor("color9C5B5B");
        break;
      case "등록":
        setButtonColor("colorE7AB20");
        break;
      case "장학금":
        setButtonColor("colorDE726B");
        break;
      case "학생지원":
        setButtonColor("color4F5A93");
        break;
    }
  }
  const handlePostActive = () => {
    setIsPostActive(!isPostActive);
  };

  useEffect(() => {
    chooseButtonColor();
  }, []);

  return (
    <div className="profilepage__post">
      {/* 해당답변이 보여질 카드 */}
      <button onClick={handlePostActive} className={buttonColor}>
        Q. {question}
      </button>
      {/* 질문사항이 보여질 버튼*/}
      {isPostActive ? (
        <div>
          <header>
            <IconButton>
              <ReportIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </header>
          <p>A. {answer}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProfilePost;
