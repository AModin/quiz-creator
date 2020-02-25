import React from "react";
import QuizStore from "../store/QuizStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
 
const QuizesList = observer(() => {
  const { quizes } = QuizStore;
  const quizesIds = Object.keys(quizes);
  console.log(toJS(QuizStore))
  return (
    <div>
      <h1>List of my Quizes </h1>
      {
        quizesIds?.map(quizId => {
          return <p key={quizId}>{quizes[quizId].title}</p>
        })
      }
    </div>
  );
});

export default QuizesList;
