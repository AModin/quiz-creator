import React, { useState } from "react";
import QuizStore from "../store/QuizStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import StyledButton from "../components/kit/StyledButton";
import StyledQuizPage from "./StyledQuizPage";
import QuizHeader from "../components/QuizHeader";
import QuizBody from "../components/QuizBody";

const QuizPage = observer(props => {
  const [answers, setAnswers] = useState([
    { title: "Qwerty", value: "qwerty" }
  ]);
  const listOfAnswers = answers.map(answer => (
    <p key={answer.title}>
      Title: {answer.title},<i> Answer: {answer.value}</i>
    </p>
  ));

  const updateAnswers = (title, value) => {
    let newAnswers = [...answers];
    let titles = newAnswers.map(a=>(a.title))
    if (titles.includes(title)) {
      newAnswers = newAnswers.filter(a => a.title !== title);
    }
    newAnswers.push({ title: title, value: value });
    setAnswers(newAnswers);
  };

  const quizId = props.match.params.quizId;
  let date = new Date(parseInt(quizId));
  date = date.toLocaleDateString();
  const quiz = toJS(QuizStore).quizes[quizId];

  if (quiz) {
    var questions = quiz.questions;
  }
  return quiz ? (
    <StyledQuizPage>
      <QuizHeader
        title={quiz.title}
        description="some description..."
        date={date}
      ></QuizHeader>
      <QuizBody questions={questions} updateAnswers={updateAnswers}></QuizBody>
      <div>
        <p>Answers: </p>
        {listOfAnswers}
      </div>
      <StyledButton
        dark
        color="green"
        onClick={() => updateAnswers("Шо?", "то")}
      >
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
