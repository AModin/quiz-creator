import * as React from "react";

import QuizStore from "../store/QuizStore";
import QuizQuestionList from "../components/QuizQuestionList";
import AddQuizTitle from "../components/AddQuizTitle";
import AddQuizQuestion from "../components/AddQuizQuestion";
import { observer } from "mobx-react";
import { observable, decorate } from "mobx";

class QuestionListLocal {
  questionsList = []
}

decorate(QuestionListLocal, {
  questionsList: observable
});

const questionListLocal = new QuestionListLocal();

const AddQuiz = observer(() => {
  const { questionsList } = questionListLocal;
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

    const newQuiz = {
      id: Date.now(),
      title: quizTitle,
      questions: [...questionsList]
    }
    aqqQuiz(newQuiz);
    questionsList.splice(0,questionsList.length)
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

export { AddQuiz as default, questionListLocal } ;
