import React from "react";
import QuizStore from "../store/QuizStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { Link } from "react-router-dom";
 
const QuizesList = observer(() => {
  const { quizes } = QuizStore;
  const quizesIds = Object.keys(quizes);
  console.log(toJS(QuizStore))
  return (
    <div className="quizes-list">
      <h1>List of my Quizes </h1>
      {
        quizesIds?.map(quizId => {
          return <Link to={`/quiz/${quizId}`} key={quizId}>{quizes[quizId].title}</Link>
        })
      }
    </div>
  );
});

export default QuizesList;
