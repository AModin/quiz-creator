import * as React from "react";

const AddQuizQuestion = ({
  questionInput,
  setQuestionInput,
  questionType,
  setQuestionType,
  addQuestion
}) => {
  const shouldButtonBeDisabled = !questionInput.trim().length;
  return (
    <div className="question">
      <input
        value={questionInput}
        onChange={e => setQuestionInput(e.currentTarget.value)}
        placeholder="Title question in the quiz"
        className="add-title-quiz-input"
      />
      <input
        type="checkbox"
        checked={questionType}
        onChange={() => setQuestionType(!questionType)}
      />{" "}
      is single
      <button
        className="add-quiz-title-button green"
        onClick={addQuestion}
        disabled={shouldButtonBeDisabled}
      >
        Add question
      </button>
    </div>
  );
};

export default AddQuizQuestion;
