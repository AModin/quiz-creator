import * as React from "react";

import QuizStore from "../store/QuizStore";
import QuizQuestionList from "../components/QuizQuestionList";
import AddQuizTitle from "../components/AddQuizTitle";
import AddQuizQuestion from "../components/AddQuizQuestion";
import { observer } from "mobx-react";
import { observable, decorate } from "mobx";

class QuestionListLocal {
  questionsList = [];
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

  let Test = {
    id: Date.now(),
    title: "Cool Quiz",
    questions: [
      {
        id: 0,
        title: "When?",
        isSingle: true,
        variants: [
          { id: 1, title: "1945" },
          { id: 2, title: "1944" },
          { id: 3, title: "1956" },
          { id: 4, title: "1937" }
        ]
      },
      {
        id: 1,
        title: "Why?",
        isSingle: false,
        variants: [
          { id: 1, title: "kah1" },
          { id: 2, title: "kah2" },
          { id: 3, title: "kah3" },
          { id: 4, title: "kah4" }
        ]
      },
    ]
  };
  // React.useEffect(() => {
    aqqQuiz(Test);
  // });

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
    };
    aqqQuiz(newQuiz);
    questionsList.splice(0, questionsList.length);
    setQuizTitle("");
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

export { AddQuiz as default, questionListLocal };
