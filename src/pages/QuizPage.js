import React from "react";
import QuizStore from "../store/QuizStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const QuizPage = observer(props => {
  console.log(toJS(QuizStore))
  return (
    <div>
      <h1>Quiz Page </h1>
    </div>
  )
});

export default QuizPage;
