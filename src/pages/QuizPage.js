import React, { useState } from "react";
import QuizStore from "../store/QuizStore";
import AnswersStore from "../store/AnswersStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import StyledButton from "../components/kit/StyledButton";
import StyledQuizPage from "./StyledQuizPage";
import QuizHeader from "../components/QuizHeader";
import QuizBody from "../components/QuizBody";
import { Link } from "react-router-dom";

const QuizPage = observer(props => {
  const [answers, setAnswers] = useState([]);
  const { addAnswers } = AnswersStore;
  const listOfAnswers = answers.map(answer => (
    <p key={answer.title}>
      Title: {answer.title},<i> Answer: {answer.value}</i>
    </p>
  ));

  const updateAnswers = (title, value) => {
    let newAnswers = [...answers];
    let titles = newAnswers.map(a => a.title);
    if (titles.includes(title)) {
      newAnswers = newAnswers.filter(a => a.title !== title);
    }
    newAnswers.push({ title: title, value: value });
    setAnswers(newAnswers);
  };

  const onSubmitAnswers = () => {
    if (!answers.length || !answers.length) {
      alert("Check that you answered on all questions");
      return;
    }

    const newAnswer = {
      quizId: quizId,
      id: Date.now(),
      student: "student",
      answers: [...answers]
    };
    addAnswers(newAnswer);
    answers.splice(0, answers.length);
    console.log(newAnswer);
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
      <StyledButton dark color="green" onClick={onSubmitAnswers}>
        <Link to="/end-of-test">Submit Quiz</Link>
      </StyledButton>
    </StyledQuizPage>
  ) : (
    <div>
      <h1>Quiz not find</h1>
    </div>
  );
});

export default QuizPage;
