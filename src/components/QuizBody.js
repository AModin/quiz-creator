import React from "react";
import QuestionCard from "./QuestionCard";

const QuizBody = ({ questions, updateAnswers }) => {
  var body = null;
  if (questions) {
    body = questions.map(quest => (
      <div key={quest.id}>
        <QuestionCard question={quest} updateAnswers={updateAnswers}/>
        <hr/>
      </div>
    ));
  }
  return <div>{body}</div>;
};

export default QuizBody;
