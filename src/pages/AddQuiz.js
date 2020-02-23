import * as React from "react";

import QuizStore from "../store/QuizStore";
import QuizQuestionList from "../components/QuizQuestionList";
import AddQuizTitle from "../components/AddQuizTitle";
import AddQuizQuestion from "../components/AddQuizQuestion";
import { observer } from "mobx-react";
import { observable, toJS } from "mobx";

let questionsList = observable([]);

const AddQuiz = observer(() => {
  const [questionInput, setQuestionInput] = React.useState("");
  const [quizTitle, setQuizTitle] = React.useState("");
  const [questionType, setQuestionType] = React.useState(true);
  const { aqqQuiz } = QuizStore;

  const addQuestion = () => {
    if (!questionInput.trim().length) {
      alert("You should place title!");
      return;
    }
    const question = {
      title: questionInput,
      id: Date.now(),
      variants: [],
      isSingle: questionType
    };
    questionsList.push(question);

    setQuestionInput("");
  };

  const onQuizCreate = () => {
    if (!quizTitle.length || !questionsList.length) {
      alert("Check that everything in place");
      return;
    }
    aqqQuiz({
      title: quizTitle,
      questions: questionsList
    });
    questionsList = [];
    setQuizTitle("")
  };

  return (
    <div>
      <AddQuizTitle
        quizTitle={quizTitle}
        setQuizTitle={setQuizTitle}
        onQuizCreate={onQuizCreate}
      />

      <QuizQuestionList questionsList={questionsList} />
      <p>{questionsList.length}</p>
      <AddQuizQuestion
        questionInput={questionInput}
        setQuestionInput={setQuestionInput}
        questionType={questionType}
        setQuestionType={setQuestionType}
        addQuestion={addQuestion}
      />
      <div>
        <button className="add-quiz-title-button purple" onClick={onQuizCreate}>
          Create quiz
        </button>
      </div>
    </div>
  );
});

export default AddQuiz;
