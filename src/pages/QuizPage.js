import React, { useState } from "react";
import QuizStore from "../store/QuizStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import StyledRadioButton from "../components/kit/StyledRadioButton";
import StyledButton from "../components/kit/StyledButton";
import StyledCheckbox from "../components/kit/StyledCheckbox";
import StyledQuizPage from "./StyledQuizPage";
import QuizHeader from "../components/QuizHeader";
import QuizBody from "../components/QuizBody";

const QuizPage = observer(props => {

  const quizId = props.match.params.quizId;
  let date = new Date(parseInt(quizId));
  date = date.toLocaleDateString();
  const quiz = toJS(QuizStore).quizes[quizId];

  if (quiz) {
    var questions = quiz.questions
  }
  return quiz ? (
    <StyledQuizPage>
      <QuizHeader
        title={quiz.title}
        description="some description..."
        date={date}
      ></QuizHeader>
      <QuizBody questions={questions}></QuizBody>
      <StyledButton dark color="green">
        Submit Quiz
      </StyledButton>
    </StyledQuizPage>
  ) : (
    <div>
      <h1>Quiz not find</h1>
    </div>
  );
});

export default QuizPage;
