import * as React from "react";

import QuizStore from "../store/QuizStore";
import QuizQuestionList from "../components/QuizQuestionList";
import AddQuizTitle from "../components/AddQuizTitle";
import AddQuizQuestion from "../components/AddQuizQuestion";

const AddQuiz = () => {
  const [questionsList, setQuestionToTheList] = React.useState([]);
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
      variants: []
    };
    setQuestionToTheList([...questionsList, question]);
    setQuestionInput("");
  };

  const onQuizCreate = () => {
    if (!quizTitle.length || !questionsList.length) {
      alert("Check that everything in place");
      return;
    }
    aqqQuiz(questionsList);
  };

  return (
    <div>
      <AddQuizTitle
        quizTitle={quizTitle}
        setQuizTitle={setQuizTitle}
        onQuizCreate={onQuizCreate}
      />

      <QuizQuestionList
        questionsList={questionsList}
        setQuestionToTheList={setQuestionToTheList}
      />

      <AddQuizQuestion
        questionInput={questionInput}
        setQuestionInput={setQuestionInput}
        questionType={questionType}
        setQuestionType={setQuestionType}
        addQuestion={addQuestion}
      />
      <div>
        <button onClick={onQuizCreate}>Create quiz</button>
      </div>
    </div>
  );
};

export default AddQuiz;
