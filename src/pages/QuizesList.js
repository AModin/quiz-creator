import React from "react";
import QuizStore from "../store/QuizStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const QuizesList = observer(props => {
  console.log(toJS(QuizStore));
  return (
    <div>
      <h1>List of my Quizes </h1>
    </div>
  );
});

export default QuizesList;
