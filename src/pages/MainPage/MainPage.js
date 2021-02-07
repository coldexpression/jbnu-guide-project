import React from "react";
import Header from "./components/Header"
import NavContainer from "./containers/NavConnect"
import ArticleContainer from "./containers/ArticleConnect"

const MainPage = () => {
  return (
    <div>
      <NavContainer></NavContainer>

      <ArticleContainer></ArticleContainer>
    </div>
  );
};

export default MainPage;
