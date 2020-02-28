import React from "react";
import QuizStore from "../store/QuizStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const QuizPage = observer(props => {
  const quizId = props.match.params.quizId;
  console.log(toJS(QuizStore));
  const quiz = toJS(QuizStore).quizes[quizId];

  console.log(props);
  return quiz ? (
    <div>
      <h1>Quiz Page {quizId}</h1>
      <h2>{quiz.title}</h2>
    </div>
  ) : (
    <div>
      <h1>Quiz not find</h1>
    </div>
  );
});

export default QuizPage;
