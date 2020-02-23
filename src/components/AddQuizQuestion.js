import * as React from "react";

const AddQuizQuestion = ({
  questionInput,
  setQuestionInput,
  questionType,
  setQuestionType,
  addQuestion
}) => {
  return (
    <div>
      <input
        value={questionInput}
        onChange={e => setQuestionInput(e.currentTarget.value)}
        placeholder="Title question in the quiz"
      />
      <input
        type="checkbox"
        checked={questionType}
        onChange={() => setQuestionType(!questionType)}
      />{" "}
      is single
      <button className="add-quiz-title-button" onClick={addQuestion}>
        Add question
      </button>
    </div>
  );
};

export default AddQuizQuestion;
