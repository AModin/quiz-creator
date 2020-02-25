import * as React from "react";
import TextInput from "./kit/TextInput";
import AddButton from "./kit/AddButton";

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
      <TextInput
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
      <AddButton
        onClick={addQuestion}
        disabled={shouldButtonBeDisabled}
        variant="add"
      >
        Add question
      </AddButton>
    </div>
  );
};

export default AddQuizQuestion;
