import React from "react";
import StyledQuizPage from "../pages/StyledQuizPage";

const QuizHeader = props => {
  return (
    <StyledQuizPage>
      <h2>{props.title}</h2>
      <button>Edit Quiz</button>
      <p className="quiz-description">{props.description}</p>
      <p className="quiz-date">date of creation: {props.date}</p>
    </StyledQuizPage>
  );
};

export default QuizHeader;
