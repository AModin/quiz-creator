import React from "react";
import StyledRadioButton from "./kit/StyledRadioButton";
import QuestionCard from "./QuestionCard";

const QuizBody = ({ questions }) => {
  var body = null;
  if (questions) {
    body = questions.map(quest => (
      <div key={quest.id}>
        <QuestionCard question={quest}/>
        <hr/>
      </div>
    ));
  }
  return <div>{body}</div>;
};

export default QuizBody;
